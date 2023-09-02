import { ManCityLogo } from "../Utils/tools";
const Footer = () => {
  return (
    <section className="bck_blue">
      <div className="footer_logo">
        <ManCityLogo link={true} linkTo="/" width="70px" height="70px" />
      </div>
      <div className="footer_descl">
        Manchester City 2023 , All Rights Reservd
      </div>
    </section>
  );
};

export default Footer;
