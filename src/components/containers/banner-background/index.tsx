import React from "react";
import "./styles.scss";

interface IBannerBackgroundProps {
  children: React.ReactNode;
  image: string;
  alt: string;
  className?: string;
  height?: string;
}

const BannerBackground: React.FC<IBannerBackgroundProps> = ({
  children,
  image,
  className,
  alt,
  height = "auto",
}) => {
  return (
    <div className="banner-background">
      <img
        src={image}
        alt={alt}
        className="banner-background__image"
        style={{ height }}
      />
      <div className={className}>{children}</div>
    </div>
  );
};

export default BannerBackground;
