import CardsToolsVideos from "@/components/containers/cards-tool-videos";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import React from "react";
import videos from "@/utils/data/videos.json";
import { Metadata } from "next";
import Title from "@/components/ui/title";
import roads from "@/utils/data/road.json";

export const metadata: Metadata = {
  title: "Videos FitJaguarGo",
  description: "Generated by create next app",
};

const ToolsVideosPage = () => {
  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <Title>Videos</Title>
        <CardsToolsVideos videos={videos} roads={roads} />
      </WrapperContent>
    </main>
  );
};

export default ToolsVideosPage;
