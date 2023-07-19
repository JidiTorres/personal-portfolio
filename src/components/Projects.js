import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"
import projImg4 from "../assets/img/youtube-channel-img.png"
import projImg2 from "../assets/img/spotify-channel-img.png";
import projImg3 from "../assets/img/soundcloud-channel-img.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Music Production",
      description: "Youtube Channel",
      imgUrl: projImg4,
      link: "https://www.youtube.com/channel/UC2-vag6zSNJnnjWv7hVh8sA",
    },
    {
      title: "Music Production",
      description: "Spotify Artist Page",
      imgUrl: projImg2,
      link: "https://open.spotify.com/intl-fr/artist/3bcwK8hC05uXsqRJC8so4N",
    },
    {
      title: "Music Production",
      description: "SoundCloud Artist Page",
      imgUrl: projImg3,
      link: "https://soundcloud.com/jididemtl",
    },
    /*{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "",
    },*/
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
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Music</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">App</Nav.Link>
                    </Nav.Item>
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
                    <Tab.Pane eventKey="second">
                      <p>Web Projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>App Projects</p>
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
