import { Toolbar, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../Hoc/AuthProvider";
import { logOutHandler } from "../Utils/LogOutFunciton";
import { ManCityLogo } from "../Utils/tools";

const Header = () => {
  const user = useAuth();
  console.log(user);

  return (
    <AppBar
      position="fixed"
      style={{
        background: "#98c5e9",
        padding: "10px 0px",
        borderBottom: "2px solid #00285e",
      }}
    >
      
      <Toolbar style={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <ManCityLogo link={true} linkTo="/" width="70px" height="70px" />
          </div>
        </div>
        <Link to="/the-team">
          <Button color="inherit">The Team</Button>
        </Link>
        <Link to="/the-matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {user ? (
          <>
            <Link to="/dashbord">
              <Button color="inherit">Dashbord</Button>
            </Link>
            <Button onClick={() => logOutHandler()}>Log Out</Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
