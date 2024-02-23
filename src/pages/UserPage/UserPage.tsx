import { NavLink, Outlet } from "react-router-dom";
import "./UserPage.css";
function UserPage() {
    
    return(<div className="user-page">
        <div className="user-page-options">
            <ul>
                <NavLink to={'/user/info'}><li>User Info</li></NavLink>
                <li>Addresses</li>
                <li>Orders</li>
                <li>Coupons</li>
            </ul>
        </div>
        <div className="user-page-content-container">
            <Outlet></Outlet>
        </div>
    </div>
);
}

export default UserPage;