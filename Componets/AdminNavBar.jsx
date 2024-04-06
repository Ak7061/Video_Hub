import { Link } from "react-router-dom";
import '../Styles/AdminNavBar.css'

const AdminNavBar = () => {
    return (
        <div className="adminnavar">
            <div className="log">
                <img src="https://imgs.search.brave.com/jORCM5Rrf50XoGKBql3UZeGeKay1-2kY_utGIVWtvsA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw" alt="" />
            </div>
            <div className="option">
                <Link to='/adminhomepage/adminview'> View</Link>
                <Link to='/adminhomepage/addvideo'> AddVideo</Link>
            </div>
        </div>
     );
}
 
export default AdminNavBar;