import * as React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#111",
        lineHeight: 1.5,
      }}
    >
      <h2 style={{ margin: "0 0 16px" }}>Nova mensagem pelo portfólio</h2>
      <p style={{ margin: "0 0 4px" }}>
        <strong>Nome:</strong> {name}
      </p>
      <p style={{ margin: "0 0 16px" }}>
        <strong>E-mail:</strong> {email}
      </p>
      <p style={{ margin: "0 0 4px" }}>
        <strong>Mensagem:</strong>
      </p>
      <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{message}</p>
      <hr
        style={{
          margin: "24px 0",
          border: "none",
          borderTop: "1px solid #ddd",
        }}
      />
      <p style={{ margin: 0, fontSize: 12, color: "#666" }}>
        Basta responder este e-mail para falar com {name}.
      </p>
    </div>
  );
}
