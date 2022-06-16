import "./Sidebar.css";
import logo from "../utils/PU-logo.png"
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} className="logo_icon" />
            <Link to="/" style={{ textDecoration: 'none' }}> <SidebarOption active Icon={HomeIcon} text="Home" /> </Link>
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={ListAltIcon} text="Courses" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

        </div>
    )
}

export default Sidebar;