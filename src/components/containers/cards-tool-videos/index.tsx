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
  free: boolean;
  slug: string;
};

interface ICardToolVideoProps {
  videos: ToolVideo[];
  isViewAll?: boolean;
}

const CardsToolsVideos: FC<ICardToolVideoProps> = ({ videos, isViewAll }) => {
  return (
    <div className="cards-tool-videos">
      <div className="videos-header">
        <Title component="h2">Videos</Title>
        {isViewAll ? (
          <Link href="/herramientas/videos" className="videos-header__view">
            Ver todo
          </Link>
        ) : (
          <div className="videos-header__options">
            <div>
              <OrderIcon />
            </div>
            <div>
              <FilterIcon />
            </div>
          </div>
        )}
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
