import { FC, ReactNode } from "react";
import "./styles.scss";

interface ISubtitleProps {
  children: ReactNode;
  className?: string;
}

const Subtitle: FC<ISubtitleProps> = ({ children, className }) => {
  return <p className={`subtitle ${className}`}>{children}</p>;
};

export default Subtitle;
