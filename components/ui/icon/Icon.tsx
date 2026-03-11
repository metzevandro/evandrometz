import "./Icon.module.scss";

interface IconProps {
  name: string;
}

export function Icon(props: IconProps) {
  const { name } = props;

  return <span className="material-symbols-outlined">{name}</span>;
}
