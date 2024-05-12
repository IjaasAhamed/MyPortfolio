import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './App.css';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import logo from './img/logo-2.png';
import myImg from './img/my-img.webp';
import abtImg from './img/abt-img.webp';
import skillImg from './img/html.webp';
import skillImg1 from './img/css.webp';
import skillImg2 from './img/js.webp';
import skillImg3 from './img/php.webp';
import skillImg4 from './img/react.webp';
import skillImg5 from './img/nodejs.webp';
import skillImg6 from './img/bs.webp';
import skillImg7 from './img/java.webp';
import skillImg8 from './img/mysql.webp';
import stina from './img/stina.webp';
import finance from './img/finance.webp';
import Kidzee from './img/kidzee.png';
import alif from './img/alif.jpeg';
import Typewriter from './Typewriter.js';
import Loader from './Loader';
import { Fade, Zoom } from 'react-awesome-reveal';

// import NotFound from './NotFound';

function App() {

  // Loading screen
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoading(false);
      }
      catch (error) {
        console.error('Error Fetching Data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageUrls = [
      skillImg,
      skillImg1,
      skillImg2,
      skillImg3,
      skillImg4,
      skillImg5,
      skillImg6,
      skillImg7,
      skillImg8,
      // Add all your image URLs here
    ];

    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'preload';
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  const email = 'ijaas.mindtek@gmail.com'; // Replace with your email address

  const handleClick = () => {
    openGmail(email);
  };

  const openGmail = (email) => {
    // Construct the Gmail URL with the recipient email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='gfnt'>
         {loading ? (
      <Loader /> // Render Loader component while loading is true
    ) : (
      <>
      <header className={`header ${showStickyHeader ? 'sticky-header' : ''}`}>
        <img src={logo} className="logo" alt="logo" />

        <nav className='mobhde'>
          <ScrollLink to="homesec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Home</ScrollLink>
          <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">About</ScrollLink>
          <ScrollLink to="projectsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" >Projects</ScrollLink>
          <ScrollLink to="skillsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Skills</ScrollLink>
          <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Contact</ScrollLink>
          <hr className="nav-line" />
          <div className='social-logo' onClick={handleClick}>
            <IoMail />
          </div>
          <a href="https://in.linkedin.com/in/ijaas-ahamed" target="_blank" rel="noopener noreferrer" className='social-logo'>
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/IjaasAhamed" target="_blank" rel="noopener noreferrer" className='social-logo'><FaGithub /></a>
        </nav>
        {/* Hamburger icon to toggle the sidebar */}
        <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
          <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
          <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
        </div>


        {/* Sidebar for mobile view */}
        <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ScrollLink to="homesec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Home</ScrollLink>
          <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">About</ScrollLink>
          <ScrollLink to="projectsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" >Projects</ScrollLink>
          <ScrollLink to="skillsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Skills</ScrollLink>
          <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link">Contact</ScrollLink>
          <hr className="nav-line" />
          <span className='social-logo'><IoMail /></span>
          <span className='social-logo'><FaLinkedinIn /></span>
          <span className='social-logo'><FaGithub /></span>
        </nav>
      </header>
      <main id="homesec">
        <div className='center-container col-lg-12 col-sm-12' style={{ height: '600px' }}>
          <div className='center-content text-center col-lg-4 col-sm-4'>
            <div className='text-left'>
              <h1 className='txtclr bigfn txtanimate smfont'>Ijaas<br></br> Ahamed<span className='period'>.</span></h1>
              <div className='ulinee'></div>
              <p className='txtclr my-4 btnlinks'><a href="https://in.linkedin.com/in/ijaas-ahamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Linkedin |</span></a><a href="https://github.com/IjaasAhamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Github |</span></a><a href="https://www.instagram.com/ijaas_ahamed___" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Instagram</span></a></p>
              <div className="btn-container">
                <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='btntrans'>CONTACT ME</ScrollLink>
              </div>
            </div>
          </div>


          <div className="image-container col-lg-4 col-sm-4 colored-circle-container">
            <span className="colored-circle"></span>
            <Fade triggerOnce='true'><img src={myImg} alt='Ijaas Ahamed' className="image" /></Fade>
          </div>

          <div className='col-lg-4 col-sm-4 px-5 introhde'>
            <h5 className='txtclrgrn'>INTRODUCTION</h5>
            <Typewriter />
            <p className='txtclr'>I've successfully completed web development, showcasing proficiency in building dynamic web applications. Eager to secure a job that provides training in technologies like HTML, CSS, JS, React JS, Node JS, Php and MySql. </p>
            <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='txtclrgrn button-ul'>Learn more   <FaLongArrowAltDown /></ScrollLink>
          </div>
        </div>

      </main>

      <div className='aboutsec col-lg-12 col-sm-12' id="aboutsec">
        <Zoom triggerOnce='true'>
          <h1 className='txtclr text-center py-5 bigfn spclfn'>About</h1>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <div className='col-lg-6 col-sm-12'>
              <img src={abtImg} alt="About" className='abtimg img-fluid' />
            </div>
            <div className='col-lg-6 col-sm-12 mgxy'>
              <p className='txtclr abttxt m-5'>
                I'm a self-taught Web developer with the ability to learn and collaborate in rapidly changing environments and compositions. I am very interested in web development and have learned HTML, CSS, JavaScript, Bootstrap, PHP, React.js, Node.js, MySQL. My projects boosted my interest in web development as a full-time career option.<br /><br />
                I am also inclined towards creative activities such as web designing and public speaking. I have always been an active student in school and college, participating in many cultural events during my school and college days.
              </p>
            </div>
          </div>
          <div className='pb-5 text-center'>
            <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='btntrans mx-4'>Let's Talk</ScrollLink>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1FZKDnfBNiMgsElwMOKspknaqiU26GG-q/view" className='btntrans'>
              Download CV
            </a>
          </div>
        </Zoom>
      </div>

      <div className='worksec col-lg-12 col-sm-12' id="projectsec">
        <Zoom triggerOnce='true'>
          <div className='col-lg-12 col-sm-12'>
            <h1 className='txtclr text-center py-5 bigfn spclfn'>My Recent Work</h1>
          </div>
          <div className='projects-container mx-5'>
            <div className='project col-lg-6 col-sm-12 mb-4'>
              <div className='divpad'>
                <img src={stina} alt='Project 1' className='projectImg img-fluid' />
                <h1 className='txtclr my-4 bigfn spclfn1'>Photography Website</h1>
                <p className='txtclr'>This Photography website serves as a photography studio where the administrator has the ability to update the images and contents according to their preferences. It provides a platform for the studio owner to showcase their works. Users have the opportunity to view the website and express their admiration for the administrator's work. Additionally, they can easily contact the administrator for further inquiries.</p>
                {/* <a href="http://stinastudio.seasense.in/"><button className='btntrans mb-5'>View Project</button></a> */}
              </div>
            </div>
            <div className='project col-lg-6 col-sm-12 mb-4'>
              <div className='divpad'>
                <img src={finance} alt='Project 2' className='projectImg img-fluid' />
                <h1 className='txtclr my-4 bigfn spclfn1'>Finance Website</h1>
                <p className='txtclr'>The Finance web application is designed for a Gold Finance Vendors' website. With this application, customers can store their loan information and generate bills for both receiving and repaying loans. A web application should be capable of performing four fundamental operations: Create, Read, Update, and Delete.</p>
                {/* <Link to="/notfound">
              <button className='btntrans mb-5'>View Project</button>
            </Link> */}
              </div>
            </div>
            <div className='project col-lg-6 col-sm-12 mb-4'>
              <div className='divpad'>
                <img src={Kidzee} alt='Project 2' className='projectImg img-fluid' />
                <h1 className='txtclr my-4 bigfn spclfn1'>School Website</h1>
                <p className='txtclr'>This school website serves as a comprehensive platform, featuring essential pages such as admission for enrollment, franchise details, a convenient locate us page, Pentemind information, and a dedicated Programmes page offering a range of educational options, including Playgroup, Nursery, Kindergarten, Teacher Training Programme, and Daycare services.</p>
                {/* <Link to="/notfound">
              <button className='btntrans mb-5'>View Project</button>
            </Link> */}
              </div>
            </div>
            <div className='project col-lg-6 col-sm-12 mb-4'>
              <div className='divpad'>
                <img src={alif} alt='Project 2' className='projectImg img-fluid' />
                <h1 className='txtclr my-4 bigfn spclfn1'>Catering Website</h1>
                <p className='txtclr'>This catering website serves as a concise yet comprehensive platform, featuring essential pages such as an About Us section to learn more about our culinary journey, a Menu page showcasing our delectable offerings, a Contact Us page for inquiries and feedback, and a convenient Book Now option to seamlessly plan your events with Alif Caters.</p>
                {/* <Link to="/notfound">
              <button className='btntrans mb-5'>View Project</button>
            </Link> */}
              </div>
            </div>
          </div>
        </Zoom>
      </div>


      <div className='skillsec col-lg-12 col-sm-12' id="skillsec">
        <Zoom cascade triggerOnce='true' >
          <h1 className='txtclr text-center py-5 bigfn spclfn'>Skills</h1>
          <div className='d1-flex flex-wrap mx-5 py-4'>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>Html</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg1} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>CSS</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg2} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>JavaScript</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg3} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>Php</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg4} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>React JS</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg5} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>Node JS</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg6} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>Bootstrap</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg7} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>Java</h5>
            </div>
            <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
              <img src={skillImg8} alt='Ijaas Ahamed' className='skillImg' loading='lazy' />
              <h5 className='pt-2 fs-6'>MySql</h5>
            </div>
          </div>
        </Zoom>
      </div>
      <div className='contactsec col-lg-12 col-sm-12 py-5' id="contactsec">
        <Fade cascade triggerOnce='true'>
          <h1 className='txtclr text-center pt-5 bigfn spclfn'>Let's Talk</h1>
          <p className='txtclr text-center fs-5'>Feel Free to Reach Me</p>
          <form action="https://formsubmit.co/ijaas.mindtek@gmail.com" method="POST">
            <input type='text' name='name' placeholder='Name' className='inptxt' required />
            <input type='email' name='email' placeholder='Email' className='inptxt' required />
            <input type='text' name='subject' placeholder='Subject' className='inptxt' required />
            <textarea rows='4' name='message' placeholder='Message' className='inptxt' required ></textarea>
            <button type='submit' className='contactbtn mb-5'>Submit</button>
          </form>
        </Fade>
      </div>

      <footer>
        <div className='container col-lg-12 col-sm-12 d-flex'>
          <div className='col-lg-4 col-sm-4'>
            <img src={logo} className="logofoot " alt="logo" />
          </div>
          <div className='col-lg-8 col-sm-8 text-end logoend'>
            <span className='social-logo-foot' onClick={handleClick}>
              <IoMail />
            </span>
            <a href="https://in.linkedin.com/in/ijaas-ahamed" target="_blank" rel="noopener noreferrer" className='social-logo-foot'>
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/IjaasAhamed" target="_blank" rel="noopener noreferrer" className='social-logo-foot'><FaGithub /></a>
          </div>
        </div>
      </footer>
      </>
      )}
    </div>
  );
}

export default App;
