import CardToolVideo from "@/components/elements/card-tool-video";
import Title from "@/components/ui/title";
import { FC } from "react";
import "./styles.scss";
import OrderIcon from "@/components/ui/icons/order";
import FilterIcon from "@/components/ui/icons/filter";
import Link from "next/link";

export type ToolVideo = {
  id: number;
  title: string;
  duration: string;
  slug: string;
  description: string;
  road: string;
  coach?: any;
  video: string;
  miniature: string;
};

interface ICardToolVideoProps {
  videos: ToolVideo[];
}

const CardsToolsVideos: FC<ICardToolVideoProps> = ({ videos }) => {
  return (
    <div className="cards-tool-videos">
      <div className="videos-header">
        <Title component="h2">Videos</Title>
        <div className="videos-header__options">
          <div>
            <OrderIcon />
          </div>
          <div>
            <FilterIcon />
          </div>
        </div>
      </div>
      <div className="cards-tool-videos__list">
        {videos.map((item) => (
          <CardToolVideo key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsToolsVideos;
