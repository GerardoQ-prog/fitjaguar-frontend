import { FC } from "react";
import "./styles.scss";
import Link from "next/link";
import { ToolDocument } from "@/components/containers/cards-tool-documents";

const CardToolDocument: FC<ToolDocument> = ({ ...item }) => {
  return (
    <div className="card-tool-document">
      <p>{item.title}</p>
      <span>Presentación PDF</span>
      <Link
        className="card-tool-document__free"
        href={`/documentos/${item.slug}`}
      >
        Recurso gratuito
      </Link>
    </div>
  );
};

export default CardToolDocument;
