import { Routes, Route } from "react-router-dom";
import UserView from "./UserView";
import UseNavBar from "./UseNavBar"

const UserHomePage = () => {
  return (
    <div className="userhomepage">
      <UseNavBar />
      <Routes>
        <Route path="/userview" element={<UserView />} />
      </Routes>
    </div>
  );
};

export default UserHomePage;
