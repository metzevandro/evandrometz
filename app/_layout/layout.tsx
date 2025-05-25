import Header from "@/components/header/header";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Header>{children}</Header>
    </>
  );
}
