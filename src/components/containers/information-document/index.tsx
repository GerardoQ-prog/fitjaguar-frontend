"use client";

import { FC } from "react";
import CardCoach from "@/components/elements/card-coach";
import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";
import "./styles.scss";
import Button from "@/components/ui/button";
import { ToolDocument } from "../cards-tool-documents";
import DownloadIcon from "@/components/ui/icons/download";
import Image from "next/image";

interface IInformationDocumentProps {
  document: ToolDocument;
}

const InformationDocument: FC<IInformationDocumentProps> = ({ document }) => {
  return (
    <div className="information-document">
      <Subtitle>Recurso gratuito</Subtitle>
      <div className="document-head">
        <Title component="h1">{document.title}</Title>
        <div className="document-head__actions">
          <div>
            <span>Ruta</span>
            <p>{document.road}</p>
          </div>
          <Button>
            <DownloadIcon /> Descargar
          </Button>
        </div>
      </div>

      <img
        alt={document.title}
        src={document.image}
        style={{ width: "100%" }}
      />
      <div className="information-document__course">
        <p>
          Deseas seguir aprendiendo, continúa tu aprendizaje en el siguiente
          curso
        </p>
        <Button type="secondary">Ver curso</Button>
      </div>
      <Subtitle className="information-document__subtitle">
        Descripcion
      </Subtitle>
      <div
        dangerouslySetInnerHTML={{ __html: document.description }}
        className="information-document__description"
      ></div>
      <Subtitle className="information-document__subtitle">Opiniones</Subtitle>
      <Subtitle className="information-document__subtitle">
        Comentarios
      </Subtitle>
      <div></div>
      <CardCoach coach={document.coach} />
    </div>
  );
};

export default InformationDocument;
