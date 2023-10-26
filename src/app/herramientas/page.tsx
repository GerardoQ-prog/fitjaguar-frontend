import CardsToolDocuments from "@/components/containers/cards-tool-documents";
import CardsToolsVideos from "@/components/containers/cards-tool-videos";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import Title from "@/components/ui/title";
import { documents, videos } from "@/utils/constants";
import React from "react";

const ToolsPage = () => {
  return (
    <div>
      <Separator height="150px" />
      <WrapperContent>
        <Title component="h1">Herramientas</Title>
        <CardsToolsVideos videos={videos} isViewAll />
        <CardsToolDocuments documents={documents} isViewAll />
      </WrapperContent>
    </div>
  );
};

export default ToolsPage;
