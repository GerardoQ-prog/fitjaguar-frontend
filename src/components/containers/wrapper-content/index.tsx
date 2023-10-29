import { FC } from "react";
import "./styles.scss";

interface IWrapperContentProps {
  children: React.ReactNode;
  className?: string;
  component?: React.ElementType;
}

const WrapperContent: FC<IWrapperContentProps> = ({
  children,
  className = "",
  component: Component = "section",
}) => {
  return (
    <Component className={`wrapper-content ${className}`}>{children}</Component>
  );
};

export default WrapperContent;
