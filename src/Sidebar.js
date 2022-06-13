import "./Sidebar.css";
import logo from './utils/PU-logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SidebarOption from "./SidebarOption";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo}className="twitter_icon" />
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            {/* <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /> */}
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            {/* <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /> */}
            <SidebarOption Icon={ListAltIcon} text="Courses" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

        </div>
    )
}

export default Sidebar;