import { ToolVideo } from "@/components/containers/cards-tool-videos";
import Button from "@/components/ui/button";
import { FC } from "react";
import "./styles.scss";
import Link from "next/link";
import CartIcon from "@/components/ui/icons/cart";

const CardToolVideo: FC<ToolVideo> = ({ ...item }) => {
  return (
    <div className="card-tool-video">
      <p>{item.title}</p>
      <span>Duración: {item.duration}</span>
      {item.free ? (
        <Link
          className="card-tool-video__free"
          href={`/herramientas/videos/${item.slug}`}
        >
          Recurso gratuito
        </Link>
      ) : (
        <div className="video-actions">
          <div className="video-actions__cart">
            <CartIcon />
          </div>
          <Button className="video-actions__buy">Comprar</Button>
        </div>
      )}
    </div>
  );
};

export default CardToolVideo;
