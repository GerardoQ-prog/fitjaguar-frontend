import CardsToolsVideos from "@/components/containers/cards-tool-videos";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import React from "react";
import videos from "@/utils/data/videos.json";

const ToolsVideosPage = () => {
  return (
    <main>
      <Separator height="100px" />
      <WrapperContent>
        <CardsToolsVideos videos={videos.items} />
      </WrapperContent>
    </main>
  );
};

export default ToolsVideosPage;
