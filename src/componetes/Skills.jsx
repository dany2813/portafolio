import meter1 from "../assets/progreso3-icon.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/arrow1-icon.svg";
import arrow2 from "../assets/arrow2-icon.svg";
import colorSharp from "../assets/img-sharp1.png";

import TrackVisibility from 'react-on-screen';


export default function Skills () {
    
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
        <TrackVisibility>
        {({isVisible })=>
            <div  className={isVisible ? "animate-skills-section active" : "hidden"}>
                <section className="skill" id="skills">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="skill-bx wow zoomIn">
                                    <h2>Skills</h2>
                                    <p>Soy una persona creativa, proactiva y orientada a resultados.<br></br> Algunas de mis habilidades clave incluyen:</p>
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Web Development</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Brand Identity</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Logo Design</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Web Development</h5>
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="background-image-left" src={colorSharp} alt="Image" />
                </section>
            </div>
        }
        </TrackVisibility>
        
    )
}