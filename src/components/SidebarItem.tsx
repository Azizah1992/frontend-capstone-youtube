import "../styles/SidebarItem.css";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
  to: string;
  title: string;
  Icon: IconType;
}

const SidebarItem = ({ to, title, Icon }: Props) => {
  return (
    <Link to={to} className="SidebarItem">
      <Icon />
      <p>{title}</p>
    </Link>
  );
};

export default SidebarItem;
