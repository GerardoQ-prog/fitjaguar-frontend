import { FC } from "react";
import documents from "@/utils/data/documents.json";
import Separator from "@/components/ui/separator";
import WrapperContent from "@/components/containers/wrapper-content";
import BackButton from "@/components/ui/back-button";
import InformationDocument from "@/components/containers/information-document";

interface ISlugVideoPageProps {
  params: {
    slug: string;
  };
}

const SlugDocumentPage: FC<ISlugVideoPageProps> = ({ params }) => {
  const document = documents.find((item) => item.slug === params.slug);

  return (
    <main>
      <Separator height="120px" />
      <WrapperContent>
        <BackButton href="/documentos" />
        {document && <InformationDocument document={document} />}
      </WrapperContent>
    </main>
  );
};

export default SlugDocumentPage;
