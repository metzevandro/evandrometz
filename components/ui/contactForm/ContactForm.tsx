"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/icon/Icon";
import "./ContactForm.scss";

type Status = "idle" | "sending" | "success" | "error";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

interface ContactFormProps {
  accentColor?: string;
}

export function ContactForm({ accentColor }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const startedAt = useRef(Date.now());
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!SITE_KEY || !widgetRef.current) return;
    const el = widgetRef.current;

    const render = () => {
      if (!window.turnstile || widgetId.current) return;
      widgetId.current = window.turnstile.render(el, {
        sitekey: SITE_KEY,
        theme: "dark",
        callback: setToken,
        "expired-callback": () => setToken(""),
        "error-callback": () => setToken(""),
      });
    };

    if (window.turnstile) {
      render();
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.onload = render;
    document.head.appendChild(script);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    if (SITE_KEY && !token) {
      setStatus("error");
      setMessage("Confirme a verificação anti-robô antes de enviar.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"), 
          startedAt: startedAt.current,
          turnstileToken: token,
        }),
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
        setMessage("Mensagem enviada! Retorno o quanto antes.");
      } else {
        const body = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(
          body.error ?? "Não foi possível enviar. Tente novamente em instantes.",
        );
      }
    } catch {
      setStatus("error");
      setMessage("Sem conexão. Verifique sua internet e tente novamente.");
    } finally {
      if (SITE_KEY) {
        window.turnstile?.reset(widgetId.current);
        setToken("");
      }
      startedAt.current = Date.now();
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={onSubmit}
      noValidate={false}
      style={{ ["--accent" as string]: accentColor }}
    >
      <div className="contact-form__field">
        <label htmlFor="contact-name">Nome</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={80}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">E-mail</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Mensagem</label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={3000}
        />
      </div>

      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="contact-website">Não preencha este campo</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {SITE_KEY && <div ref={widgetRef} className="contact-form__captcha" />}

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        <Icon name="arrow_forward" />
      </button>

      <p
        className={`contact-form__status contact-form__status--${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
