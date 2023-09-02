import { Link } from "react-router-dom";
import mCityLogo from "./../../Resources/images/logos/manchester_city_logo.png";

export function ManCityLogo(props) {
    console.log(props);
  const template = (
    <div
      className="img_cover"
      style={{
        width: props.width,
        height: props.height,
        background: `url(${mCityLogo}) no-repeat`,
      }}
    ></div>
  );
  if (props.link) {
    return <Link className="link_logo" to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
}
