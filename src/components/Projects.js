import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../language.png";
import projImg2 from "../personal.png";
import projImg3 from "../temp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Language Translator App",
      description: "Discover seamless communication with my Language Translator App! Instantly translate text between multiple languages, breaking down barriers and connecting cultures with ease. Experience fast, accurate translations at your fingertips.",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio Website",
      description: "Explore my Personal Portfolio Website, a dynamic showcase of my skills and projects. Discover innovative designs, cutting-edge frontend technologies, and compelling work that brings creativity and functionality to life.",
      imgUrl: projImg2,
    },
    {
      title: "Temperature Converter",
      description: "Transform your temperature conversion experience with ease using my Temperature Converter app. Effortlessly switch between Celsius, Fahrenheit with precision, making temperature calculations quick and intuitive.",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Dive into a showcase of my work, where creativity meets technology. I specialize in frontend development using HTML, CSS, JavaScript, and modern frameworks like React js. Explore my projects to see how I transform ideas into interactive, user-friendly experiences. Let’s build something extraordinary!.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
