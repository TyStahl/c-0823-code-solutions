import { useState } from 'react';
import './App.css';
import { FaBars } from 'react-icons/fa';

type AppDrawerProps = {
  items: string[];
};

export function AppDrawer({ items }: AppDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onCustomClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <FaBars className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
      <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
        {isOpen && <h1 className="menu-heading">Menu</h1>}
        {isOpen && items.map((item) => <MenuItems text={item} key={item} />)}
      </div>
      <div>
        <MenuModal isOpen={isOpen} onClick={onCustomClick} />
      </div>
    </div>
  );
}

type MenuItemProps = {
  text: string;
};

function MenuItems({ text }: MenuItemProps) {
  return <h3 className="menu-items">{text}</h3>;
}

type MenuModalProps = {
  isOpen: boolean;
  onClick: () => void;
};

function MenuModal({ isOpen, onClick }: MenuModalProps) {
  return (
    <div
      onClick={() => onClick()}
      className={isOpen ? 'menu-shade is-drawn' : 'menu-shade'}></div>
  );
}
