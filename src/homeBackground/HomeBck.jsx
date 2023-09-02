import { Fade } from "react-awesome-reveal";

const HomeBck = () => {
  return (
      
      <div className="featured_wrapper">
        <Fade triggerOnce>
     <div className="featured_container">
        <div className="line line_blue">1</div>
        <div className="line white">2</div>
        <div className="line line_blue">3</div>
        <span className="bck_pic"><div className="featured_text">5 leauge championship</div></span>
        </div>
    </Fade>
    </div>
  );
};

export default HomeBck;
