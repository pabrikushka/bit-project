import React from "react";

interface MenuButtonProps {
  isMenuOpened: boolean;
  setIsMenuOpened: any;
}

const MenuButton = (props: MenuButtonProps) => {
  const { isMenuOpened, setIsMenuOpened } = props;

  return (
    <button 
        onClick={(e) => setIsMenuOpened(!isMenuOpened)} 
        className={`nav-trigger btn btn-link d-md-none p-0 ${isMenuOpened ? "open" : ""}`}>
      <div className="trigger-labels">
        <div className="trigger-label menu-open">menu</div>
        <div className="trigger-label menu-close">close</div>
      </div>
    </button>
  );
};

export default MenuButton;
