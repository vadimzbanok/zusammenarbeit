import { NavLink, Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const NavLayoutComponent = () => {
  return (
    <div>
      <NavLink>
        <HeaderComponent />
      </NavLink>
      <main  >
        <Outlet />
      </main>
      
    </div>
  );
};
export default NavLayoutComponent;
