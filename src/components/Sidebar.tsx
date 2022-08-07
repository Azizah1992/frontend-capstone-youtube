import { AiOutlineLike, AiOutlineTrophy, AiFillYoutube } from "react-icons/ai";
import { GiAerialSignal } from "react-icons/gi";
import { FaHome, FaRegUser, FaVideo, FaGamepad } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import {
  MdExplore,
  MdSubscriptions,
  MdLibraryAdd,
  MdTimer,
  MdAccessTime,
} from "react-icons/md";


const localUser = JSON.parse(localStorage.getItem("user") || "null");  //

const Sidebar = () => {  //
  return (
    <div className="sidebar">
      <SidebarItem to={"/"} title={"Home"} Icon={FaHome} />
      <SidebarItem to={"/explore"} title={"Explore"} Icon={MdExplore} />
      <SidebarItem
        to={localUser ? "/profile" : "/login"}
        title={"Profile"}
        Icon={FaRegUser}
      />
      <SidebarItem to={"/"} title={"Subscriptions"} Icon={MdSubscriptions} />
      <span className="sidebar__line" />
      <SidebarItem to={"/library"} title={"Library"} Icon={MdLibraryAdd} />
      <SidebarItem to={"/"} title={"History"} Icon={MdTimer} />
      <SidebarItem to={"/"} title={"Your videos"} Icon={FaVideo} />
      <SidebarItem to={"/"} title={"Watch later"} Icon={MdAccessTime} />
      <SidebarItem to={"/"} title={"Liked videos"} Icon={AiOutlineLike} />
      <span className="sidebar__line" />
      <p className="sidebar__title">Explore</p>
      <SidebarItem to={"/"} title={"Gaming"} Icon={FaGamepad} />
      <SidebarItem to={"/"} title={"Live"} Icon={GiAerialSignal} />
      <SidebarItem to={"/"} title={"Sports"} Icon={AiOutlineTrophy} />
      <span className="sidebar__line" />
      <p className="sidebar__title">MORE FROM YOUTUBE</p>
      <SidebarItem to={"/"} title={"YouTube Premium"} Icon={AiFillYoutube} />
      <SidebarItem to={"/"} title={"Creator Studio"} Icon={AiFillYoutube} />
      <SidebarItem to={"/"} title={"YouTube Music"} Icon={AiFillYoutube} />
      <SidebarItem to={"/"} title={"YouTube Kids"} Icon={AiFillYoutube} />
      <SidebarItem to={"/"} title={"YouTube TV"} Icon={AiFillYoutube} />
      <span className="sidebar__line" />
    </div>
  );
};

export default Sidebar;
