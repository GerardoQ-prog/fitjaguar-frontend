import CardsToolDocuments from "@/components/containers/cards-tool-documents";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import { documents } from "@/utils/constants";
import React from "react";

const ToolsDocumentsPage = () => {
  return (
    <main>
      <Separator height="100px" />
      <WrapperContent>
        <CardsToolDocuments documents={documents} isViewAll={false} />
      </WrapperContent>
    </main>
  );
};

export default ToolsDocumentsPage;
