import Button from "@/components/ui/button";
import { FC } from "react";
import "./styles.scss";
import Link from "next/link";
import CartIcon from "@/components/ui/icons/cart";
import { ToolDocument } from "@/components/containers/cards-tool-documents";

const CardToolDocument: FC<ToolDocument> = ({ ...item }) => {
  return (
    <div className="card-tool-document">
      <p>{item.title}</p>
      <span>Presentación PDF</span>
      {item.free ? (
        <Link className="card-tool-document__free" href={"/"}>
          Recurso gratuito
        </Link>
      ) : (
        <div className="document-actions">
          <div className="document-actions__cart">
            <CartIcon />
          </div>
          <Button className="document-actions__buy">Comprar</Button>
        </div>
      )}
    </div>
  );
};

export default CardToolDocument;
