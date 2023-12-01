import { FC } from "react";
import ArrowLeft from "../icons/arrow-left";
import "./styles.scss";
import Link from "next/link";

interface IBackButtonProps {
  href: string;
}

const BackButton: FC<IBackButtonProps> = ({ href }) => {
  return (
    <Link href={href}>
      <div className="back-button">
        <button>
          <ArrowLeft />
        </button>
        <p>Atras</p>
      </div>
    </Link>
  );
};

export default BackButton;
