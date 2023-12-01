import Separator from "@/components/ui/separator";
import { FC } from "react";
import videos from "@/utils/data/videos.json";
import BackButton from "@/components/ui/back-button";
import WrapperContent from "@/components/containers/wrapper-content";
import InformationVideo from "@/components/containers/information-video";
import { ToolVideo } from "@/components/containers/cards-tool-videos";

interface ISlugVideoPageProps {
  params: {
    slug: string;
  };
}

const SlugVideoPage: FC<ISlugVideoPageProps> = ({ params }) => {
  const video = videos.find((item) => item.slug === params.slug);

  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <BackButton href="/videos" />
        {video && <InformationVideo video={video} />}
      </WrapperContent>
    </main>
  );
};

export default SlugVideoPage;
