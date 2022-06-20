import "./Navbar.css";
import Search from '@mui/icons-material/Search';

export default function Navbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for notices or courses"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="topbarRight">


                <span className="topbarLink">LOGIN</span>
            </div>
        </div>
    );
}