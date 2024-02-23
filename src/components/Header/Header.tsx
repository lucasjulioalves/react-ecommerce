import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import User from "../../model/User";
import { Cart } from "../../model/Cart";
function Header() {
    const cart : Cart = useSelector((state: RootState) => state.cart.value);
    const user : User = useSelector((state: RootState) => state.user.value);

    return(<ul className="header">
        <li><Link to={"/"}>Home</Link></li>

        <li>{cart.products.length === 0 ?
          <Link to={"/checkout"}>Cart</Link> :
          <Link to={"/checkout"}>Cart ({cart.products.length})</Link>
          }</li>

        <li> {user.isLogged ? 
          <Link to={"/user"}>My Profile</Link> :
          <Link to={"/login"}>Login</Link>
          }</li>

        <li><a>About</a></li>
      </ul>)
}

export default Header;