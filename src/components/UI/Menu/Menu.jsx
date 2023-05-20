import "../../../sass/components/menu.scss";

export default function Menu({ children }) {
  return (
    <div className="menu">
      <div className="menu-inside">{children}</div>
    </div>
  );
}
