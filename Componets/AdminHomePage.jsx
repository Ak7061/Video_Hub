import { Route, Routes } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";
import AdminView from "./AdminView";
import AddVideo from "./Addvideo";
import AdminEdit from "./AdminEdit";

const AdminHomePage = () => {
    return ( 
        <div className="adminhomepage">
           <AdminNavBar/>


           <Routes>
            <Route path="/adminview" element={<AdminView/>}/>
            <Route path="/addvideo" element={<AddVideo/>}/>
            <Route path="/editvideo/:id" element={<AdminEdit/>}/>
           </Routes>
        </div>
     );
}
 
export default AdminHomePage;