import CardsToolDocuments from "@/components/containers/cards-tool-documents";
import WrapperContent from "@/components/containers/wrapper-content";
import Separator from "@/components/ui/separator";
import React from "react";
import documents from "@/utils/data/documents.json";
const ToolsDocumentsPage = () => {
  return (
    <main>
      <Separator height="100px" />
      <WrapperContent>
        <CardsToolDocuments documents={documents.items} />
      </WrapperContent>
    </main>
  );
};

export default ToolsDocumentsPage;
