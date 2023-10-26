import { FC, ReactNode } from "react";
import "./styles.scss";

interface ITitleProps {
  children: ReactNode;
  className?: string;
  component?: React.ElementType;
}

const Title: FC<ITitleProps> = ({
  children,
  className = "",
  component: Component = "p",
}) => {
  return <Component className={`title ${className}`}>{children}</Component>;
};

export default Title;
