import { FC } from "react";
import "./styles.scss";
import Link from "next/link";
import { ToolDocument } from "@/components/containers/cards-tool-documents";
import Image from "next/image";

const CardToolDocument: FC<ToolDocument> = ({ ...item }) => {
  return (
    <div className="card-tool-document">
      {/* <Image
        alt={item.title}
        src={item.image}
        width={170}
        height={101}
        className="card-tool-document__image"
      /> */}
      <Link href={`/documentos/${item.slug}`}>
        <p>{item.title}</p>
      </Link>
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
