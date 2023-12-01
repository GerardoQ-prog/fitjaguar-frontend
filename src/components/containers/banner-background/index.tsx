import React from "react";
import "./styles.scss";

interface IBannerBackgroundProps {
  children: React.ReactNode;
  image: string;
  imageMobile: string;
  alt: string;
  className?: string;
  height?: string;
}

const BannerBackground: React.FC<IBannerBackgroundProps> = ({
  children,
  image,
  imageMobile,
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
      <img
        src={imageMobile}
        alt={alt}
        className="banner-background__image-mobile"
        style={{ height }}
      />
      <div className={className}>{children}</div>
    </div>
  );
};

export default BannerBackground;
