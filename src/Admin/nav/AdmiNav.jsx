import { Link } from "react-router-dom";

const AdmiNav = () => {
  const links = [
    { title: "Matches", linkTo: "/admin_matches" },
    { title: "Players", linkTo: "/admin_players" },
  ];
  return (
    <>
      {links.map((link) => {
        return (
          <Link button className="" key={link.title} to={link.linkTo}>
        <div className="admin_nav_link">{link.title}</div>    
          </Link>
        );
      })}
    </>
  );
};

export default AdmiNav;
