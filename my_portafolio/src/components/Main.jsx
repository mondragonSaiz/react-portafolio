import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useTheme, ThemeContext } from '../utils/ThemeContext';
import { reducer } from '../utils/reducers';
import { useState, useReducer, useContext } from 'react';
import './css/main.css';
import { BsStackOverflow } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import profilePic from '../assets/images/howl.jpeg';
import designLogo from '../assets/images/webDesign.svg';
import reactLogo from '../assets/images/toolImages/reactTool.svg';
import nodeLogo from '../assets/images/toolImages/nodeTool.svg';
import mongoLogo from '../assets/images/toolImages/mongoTool.svg';
import handlebarsLogo from '../assets/images/toolImages/handlebarsTool.svg';
import mysqlLogo from '../assets/images/toolImages/mysqlTool.svg';
import jqueryLogo from '../assets/images/toolImages/jqueryTool.svg';
import techLogo from '../assets/images/toolImages/rocketLogo.svg';
import figmaLogo from '../assets/images/toolImages/figmaLogo.svg';
import adobeLogo from '../assets/images/toolImages/adobeLogo.svg';
import xdLogo from '../assets/images/toolImages/xdLogo.svg';
import expressLogo from '../assets/images/toolImages/expressLogo.svg';
import Card from './Card';

function MainLayout({ colorTheme }) {
  // const initialState = useTheme();
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { darkTheme } = useContext(ThemeContext);
  // const themStyle = {
  //   backgroundColor: darkTheme ? '#363537' : '#F8F9FA',
  //   marginRight: 'auto',
  //   marginLeft: 'auto',
  // };

  // console.log('dark theme', darkTheme);
  const themeTextColor = {
    color: colorTheme ? 'white' : '#363537',
  };
  const iconsColor = {
    color: colorTheme ? 'white' : '#363537',
  };
  const customStyle = {
    color: colorTheme ? 'white' : '#363537',
    marginTop: '10%',
  };
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');
  </style>;

  return (
    <Container className="main_layout" style={{ color: 'white' }}>
      <Row>
        <Col sm={4} md={5} lg={7}>
          <div style={customStyle}>
            <h1>David Mondragon Saiz</h1>
            <p className="about_me" style={themeTextColor}>
              As a dedicated web developer, I bring a versatile skill set that
              spans both frontend and backend technologies. My expertise
              encompasses HTML, CSS, and JavaScript, allowing me to craft
              captivating and responsive user interfaces that seamlessly engage
              users across various devices.
            </p>

            <p>
              On the backend, I specialize in Node.js and Express, leveraging
              these tools to build robust and efficient server-side
              applications. My proficiency extends to databases as well, with
              hands-on experience in MongoDB and MySQL. By skillfully working
              with data, I ensure seamless interactions and reliable storage
              within applications.
            </p>
            <p>
              I'm well-versed in RESTful APIs and have successfully integrated
              them into projects to facilitate data exchange and enhance
              functionality. Additionally, my knowledge of GraphQL empowers me
              to create flexible and efficient APIs that enable precise data
              retrieval and minimize over-fetching. With a strong focus on user
              experience, functionality, and availability, I've consistently
              developed projects that prioritize the needs and satisfaction of
              end users.
            </p>
          </div>
        </Col>
        <Col sm={4} md={5} lg={5}>
          <div className="image_div">
            <Image
              className="profile_image"
              src={profilePic}
              thumbnail
              alt="profle-pic"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <div className="network_icons">
          <a href="https://github.com/mondragonSaiz" target="_blank">
            <AiFillGithub className="cursor-pointer hover:text-slate-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/davidmondragonsaiz/"
            target="_blank"
          >
            <AiFillLinkedin className="cursor-pointer hover:text-slate-600" />
          </a>
          <a href="https://stackoverflow.com/users/17744148/david-mondragon">
            <BsStackOverflow
              className="cursor-pointer hover:text-slate-600"
              target="_blank"
            />
          </a>
        </div>
      </Row>

      <Row>
        <Col sm={4} md={6} lg={6}>
          <div className="card radial-repeating">
            <div
              style={{
                textAlign: 'center',
                paddingTop: '2%',
              }}
            >
              <img
                className="tool_img"
                alt=""
                src={techLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <h3> Technologies </h3>
            </div>

            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                padding: '4% 10% 4% 10%',
                justifyContent: 'space-evenly',
                cursor: 'pointer',
              }}
            >
              <img
                alt=""
                src={mongoLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={expressLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />

              <img
                alt=""
                src={reactLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={nodeLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={handlebarsLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={mysqlLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={jqueryLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
            </div>
          </div>
        </Col>

        <Col sm={4} md={6} lg={6}>
          <div className="card radial-repeating">
            <div
              style={{
                textAlign: 'center',
                paddingTop: '2%',
              }}
            >
              <img
                alt=""
                src={designLogo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
              <h3>UI /UX Design</h3>
            </div>

            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                padding: '4% 10% 4% 10%',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <img
                alt=""
                src={figmaLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={adobeLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
              <img
                alt=""
                src={xdLogo}
                width="40"
                height="40"
                className="d-inline-block align-top tool_img"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MainLayout;