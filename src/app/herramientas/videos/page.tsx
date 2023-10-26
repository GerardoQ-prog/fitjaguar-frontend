import CardsToolsVideos from "@/components/containers/cards-tool-videos";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import { videos } from "@/utils/constants";
import React from "react";

const ToolsVideosPage = () => {
  return (
    <main>
      <Separator height="100px" />
      <WrapperContent>
        <CardsToolsVideos videos={videos} isViewAll={false} />
      </WrapperContent>
    </main>
  );
};

export default ToolsVideosPage;
