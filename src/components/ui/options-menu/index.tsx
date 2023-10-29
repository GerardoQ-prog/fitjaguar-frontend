import { FC, memo } from "react";
import "./styles.scss";
import Title from "../title";
import Link from "next/link";
import CloseIcon from "../icons/close";

interface IOptionsMenu {
  isOpen: boolean;
  handleClose: React.MouseEventHandler;
  optionsMenu: any;
}

const OptionsMenu: FC<IOptionsMenu> = ({
  isOpen,
  handleClose,
  optionsMenu,
}) => {
  return isOpen ? (
    <div className="options-menu">
      <div className="menu-content">
        <div>
          <Title className="menu-content__title">{optionsMenu.name}</Title>
        </div>
        <div className="content-list">
          {optionsMenu.options.map((option: any) => (
            <Link key={option.name} href={option.path} onClick={handleClose}>
              {option.name}
            </Link>
          ))}
          {optionsMenu.viewAll && (
            <Link
              href="/cursos"
              className="content-list__all"
              onClick={handleClose}
            >
              Ver todo
            </Link>
          )}
        </div>
        <div className="menu-content__close" onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
    </div>
  ) : null;
};

export default memo(OptionsMenu);
