import JavaScript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import Express from "../assets/img/express.png";
import nodejs from "../assets/img/nodejs.png";
import laravel from "../assets/img/laravel.webp";
import next from "../assets/img/next.png";
import Tailwind from "../assets/img/tailwind.png";
import bootstrap from "../assets/img/bootstrap1.jpg";
import MySQL from "../assets/img/MySQL.png";
import apirest from "../assets/img/apirest.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill " id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lenguajes de programación aprendidos a lo largo de los años</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img className="h-100 rounded-circle" src={JavaScript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={react} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={Express} alt="Express" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={nodejs} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={laravel} alt="Laravel" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={next} alt="Next.js" />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={Tailwind} alt="Tailwind CSS" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={MySQL} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img className="h-100 rounded-circle" src={apirest} alt="API Rest" />
                  <h5>API Rest</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="h-100 background-image-left" src={colorSharp} alt="" /> {/* Para una imagen decorativa, puedes dejar el alt vacío */}
    </section>
  );
};
