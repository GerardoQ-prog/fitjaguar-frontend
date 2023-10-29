import { ToolVideo } from "@/components/containers/cards-tool-videos";
import { FC } from "react";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";
import PlayIcon from "@/components/ui/icons/play";

const CardToolVideo: FC<ToolVideo> = ({ ...item }) => {
  return (
    <div className="card-tool-video">
      <p>{item.title}</p>
      <Link href={`/videos/${item.slug}`}>
        <div className="video-preview">
          <Image
            src={item.miniature}
            width={170}
            height={100}
            alt={item.title}
          />
          <div className="video-preview__play">
            <PlayIcon width="35" />
          </div>
        </div>
      </Link>

      <span>Duración: {item.duration}</span>
      <Link className="card-tool-video__free" href={`/videos/${item.slug}`}>
        Recurso gratuito
      </Link>
    </div>
  );
};

export default CardToolVideo;
