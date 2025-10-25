import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import logo from './img/logo-2.png';
import myImg from './img/my-img.webp';
// import abtImg from './img/abt-img.webp';
import skillImg from './img/html-5.png';
import skillImg1 from './img/css-3.png';
import skillImg2 from './img/js.png';
import skillImg4 from './img/react-js.png';
import skillImg5 from './img/node-js.png';
import skillImg3 from './img/php.png';
import skillImg6 from './img/bs.webp';
import skillImg7 from './img/java.png';
import skillImg8 from './img/mysql.png';
import skillImg9 from './img/typescript.png';
import skillImg10 from './img/tailwind-css.png';
import skillImg11 from './img/figma.png';
import skillImg12 from './img/dart.png';
import skillImg13 from './img/flutter.png';
import skillImg14 from './img/webflow.png';
import skillImg15 from './img/Power BI-skill.png';
import skillImg16 from './img/git.png';
import skillImg17 from './img/github.png';
import stina from './img/stina.webp';
import finance from './img/finance.webp';
import Kidzee from './img/kidzee.png';
import alif from './img/alif.webp';
import quivio from './img/quivio.webp';
import xchanger from './img/Xchanger.webp';
import FlutterCertificate from './img/Flutter-Certificate.png';
import UIUXCertificate from './img/UI UX-Certificate.png';
import BusinessAnalysisCertificate from './img/Business Analysis-Certificate.png';
import JavaCertificate from './img/Java-Certificate.png';
import Typewriter from './Typewriter.js';
import FlowingMenu from './FlowingMenu.js';
import TargetCursor from './TargetCursor.js';
import Loader from './Loader';
import { Fade, Zoom } from 'react-awesome-reveal';

// import NotFound from './NotFound';

function App() {

  // Loading screen
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem('myPortfolioLoaded') !== 'true';
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('myPortfolioLoaded', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);


  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setShowStickyHeader(window.scrollY > 0);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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
      skillImg9,
      skillImg10,
      skillImg11,
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

  const FlowingMenuItems = [
    { text: 'Flutter', image: skillImg13, link: FlutterCertificate },
    { text: 'UI/UX Design', image: skillImg11, link: UIUXCertificate },
    { text: 'Business Analysis', image: skillImg15, link: BusinessAnalysisCertificate },
    { text: 'Java', image: skillImg7, link: JavaCertificate },
  ]

  return (
    <div className='gfnt'>
      {loading ? (
        <Loader /> // Render Loader component while loading is true
      ) : (
        <>
          <TargetCursor
            spinDuration={0}
            hideDefaultCursor={true}
          />
          <header className={`header ${showStickyHeader ? 'sticky-header' : ''}`}>
            <img src={logo} className="logo" alt="logo" />

            <nav className='mobhde'>
              <ScrollLink to="homesec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link">Home</ScrollLink>
              <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link">About</ScrollLink>
              <ScrollLink to="projectsec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link" >Projects</ScrollLink>
              <ScrollLink to="skillsec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link">Skills</ScrollLink>
              <ScrollLink to="certificationssec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link">Certifications</ScrollLink>
              <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='button-ul cursor-target' activeClass="active-link">Contact</ScrollLink>
              <hr className="nav-line" />
              <div className='social-logo cursor-target' onClick={handleClick}>
                <IoMail />
              </div>
              <a href="https://in.linkedin.com/in/ijaas-ahamed" target="_blank" rel="noopener noreferrer" className='social-logo cursor-target'>
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/IjaasAhamed" target="_blank" rel="noopener noreferrer" className='social-logo cursor-target'><FaGithub /></a>
            </nav>
            {/* Hamburger icon to toggle the sidebar */}
            <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
              <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
              <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
              <div className={`line ${isSidebarOpen ? 'open' : ''}`}></div>
            </div>


            {/* Sidebar for mobile view */}
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
              <ScrollLink to="homesec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar}>Home</ScrollLink>
              <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar}>About</ScrollLink>
              <ScrollLink to="projectsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar} >Projects</ScrollLink>
              <ScrollLink to="skillsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar}>Skills</ScrollLink>
              <ScrollLink to="certificationssec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar}>Certifications</ScrollLink>
              <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='button-ul' activeClass="active-link" onClick={toggleSidebar}>Contact</ScrollLink>
              <hr className="nav-line" />
              <span className='social-logo' onClick={handleClick}><IoMail /></span>
              <span className='social-logo'><a href="https://in.linkedin.com/in/ijaas-ahamed" target="_blank" rel="noopener noreferrer" className='p-0'><FaLinkedinIn /></a></span>
              <span className='social-logo'><a href="https://github.com/IjaasAhamed" target="_blank" rel="noopener noreferrer" className='p-0'><FaGithub /></a></span>
            </nav>
          </header>
          <main id="homesec">
            {/* Desktop View */}
            <div className='center-container col-lg-12 col-sm-12' style={{ height: '600px' }}>
              <div className='center-content text-center col-lg-4 col-sm-4'>
                <div className='text-left'>
                  <h1 className='txtclr bigfn txtanimate smfont'>Ijaas<br></br> Ahamed<span className='period'>.</span></h1>
                  <div className='ulinee'></div>
                  <p className='txtclr my-4 btnlinks'><a href="https://in.linkedin.com/in/ijaas-ahamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks cursor-target'> Linkedin |</span></a><a href="https://github.com/IjaasAhamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks cursor-target'> Github |</span></a><a href="https://www.instagram.com/ijaas_ahamed___?igsh=MTYzMzM2ZHUzczFvYQ==" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks cursor-target'> Instagram</span></a></p>
                  <div className="btn-container">
                    <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='btntrans cursor-target'>CONTACT ME</ScrollLink>
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
                <p className='txtclr'>I've successfully completed web development, showcasing proficiency in building dynamic web applications. Eager to secure a job that provides training in technologies like HTML, CSS, JS, React JS, Node JS, Php, MySql, Flutter and Web Design. </p>
                <ScrollLink to="aboutsec" spy={true} smooth={true} duration={500} className='txtclrgrn button-ul m-0 px-0 cursor-target'>Learn more   <FaLongArrowAltDown /></ScrollLink>
              </div>
            </div>

            {/* Mobile View */}
            <div className=' col-lg-12 col-sm-12 mobhd' style={{ height: '850px' }}>
              <div className="image-container col-lg-4 col-sm-4 colored-circle-container">
                <span className="colored-circle"></span>
                <Fade triggerOnce='true'><img src={myImg} alt='Ijaas Ahamed' className="image" /></Fade>
              </div>
              <div className='ulinee'></div>


              <div className='center-content text-center col-lg-4 '>
                <div className='text-left'>
                  <h1 className='txtclr1 bigfn txtanimate smfont'>Ijaas Ahamed<span className='period'>.</span></h1>
                  <Typewriter />
                  <p className='txtclr1 my-4 btnlinks'><a href="https://in.linkedin.com/in/ijaas-ahamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Linkedin |</span></a><a href="https://github.com/IjaasAhamed" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Github |</span></a><a href="https://www.instagram.com/ijaas_ahamed___?igsh=MTYzMzM2ZHUzczFvYQ==" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer"><span className='btnlinks'> Instagram</span></a></p>
                  <div className="btn-container">
                    <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='btntrans'>CONTACT ME</ScrollLink>
                  </div>
                </div>
              </div>

            </div>
          </main>

          <section className='aboutsec col-lg-12 col-sm-12' id="aboutsec">
            <Zoom triggerOnce='true'>
              <h1 className='txtclr text-center py-5 bigfn spclfn'>About</h1>
              <div className='d-flex flex-wrap justify-content-center align-items-center'>
                {/* <div className='col-lg-6 col-sm-12'>
                  <img src={abtImg} alt="About" className='abtimg img-fluid' />
                </div> */}
                <div className='col-lg-10 col-sm-12 mgxy'>
                  <p className='txtclr abttxt'>
                    I’m a <span className='abthltxt'>self-taught Developer</span> with the ability to learn and collaborate rapidly. I’m deeply passionate about creating modern, responsive, and user-friendly web experiences.
                    Over time, I’ve learned <span className='abthltxt'>HTML, CSS, JavaScript, TypeScript, React.js, Node.js, Tailwind CSS, Php, Bootstrap, MySQL, Java, Flutter and Web Designing.</span> Each project I build teaches me something new and keeps me excited about the endless possibilities in tech.<br></br><br></br>
                    I also enjoy the creative side of things like <span className='abthltxt'>designing beautiful interfaces</span> and bringing them to life through coding. Beyond development, I have good communication skill and creative, which has helped me become more confident and expressive.<br></br>
                    I’ve always been an active learner and a team player, and I’m excited to keep growing in my field.

                  </p>
                  <div className='py-4'>
                    <ScrollLink to="contactsec" spy={true} smooth={true} duration={500} className='btntrans me-4 cursor-target'>Let's Talk</ScrollLink>
                    <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1ZfuSEQJ3tbft3e4SyjiacVVb5mB6xB1t/view?usp=sharing" className='btntrans cursor-target'>
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </Zoom>
          </section>

          <section className='worksec col-lg-12 col-sm-12' id="projectsec">
            <Zoom triggerOnce='true'>
              <div className='col-lg-12 col-sm-12'>
                <h1 className='txtclr text-center py-5 bigfn spclfn'>My Recent Work</h1>
              </div>
              <div className='projects-container mx-4 mx-md-5'>
                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <img src={xchanger} alt='Project 6' className='projectImg img-fluid' />
                      <div className="image-overlay mobviwhde"></div>
                      <div className="btn-overlay mobviwhde">
                        <Link to="https://github.com/IjaasAhamed/Xchanger-currency_converter_app" target="_blank" rel="noopener noreferrer">
                          <button className='btntransproj mx-2 cursor-target'>GitHub</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>Xchanger Mobile Application</h1>
                    <p className='txtclr'>
                      Xchanger is a Flutter-based learning project that I built to explore real-world app development. It’s a simple yet powerful currency converter that lets users quickly convert between different currencies with ease. The app uses live exchange rate APIs and also works offline, making it reliable anywhere. With its interactive keypad and clean, user-friendly interface, Xchanger offers a smooth and engaging experience for learning, experimenting, and everyday use.
                    </p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="https://github.com/IjaasAhamed/Xchanger-currency_converter_app" target="_blank" rel="noopener noreferrer">
                        <button className='btntransproj mx-2'>GitHub</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <img src={quivio} alt='Project 5' className='projectImg img-fluid' />
                      <div className="image-overlay mobviwhde"></div>
                      <div className="btn-overlay mobviwhde">
                        <Link to="https://e-commerce-quivio.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <button className='btntransproj cursor-target'>Live Demo</button>
                        </Link>
                        <Link to="https://github.com/IjaasAhamed/E-commerce_Quivio" target="_blank" rel="noopener noreferrer">
                          <button className='btntransproj mx-2 cursor-target'>GitHub</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>E-commerce Web Application</h1>
                    <p className='txtclr'>
                      This e-commerce web application serves as a comprehensive online shopping platform. It provides a seamless user experience for customers to browse, search, filter, and purchase products across various categories. The platform supports features like user authentication, wishlist, shopping cart, secure checkout, and order details.
                    </p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="https://e-commerce-quivio.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className='btntransproj'>Live Demo</button>
                      </Link>
                      <Link to="https://github.com/IjaasAhamed/E-commerce_Quivio" target="_blank" rel="noopener noreferrer">
                        <button className='btntransproj mx-2'>GitHub</button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <div className="image-overlay mobviwhde"></div>
                      <img src={alif} alt='Project 4' className='projectImg img-fluid' />
                      <div className="btn-overlay mobviwhde">
                        <Link to="/notfound">
                          <button className='btntransproj mb-5 cursor-target'>Live Demo</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>Catering Website</h1>
                    <p className='txtclr'>This catering website serves as a concise yet comprehensive platform, featuring essential pages such as an About Us section to learn more about our culinary journey, a Menu page showcasing our delectable offerings, a Contact Us page for inquiries and feedback, and a convenient Book Now option to seamlessly plan your events with Alif Caters.</p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="/notfound">
                        <button className='btntransproj mb-5'>Live Demo</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <img src={Kidzee} alt='Project 3' className='projectImg img-fluid' />
                      <div className="image-overlay mobviwhde"></div>
                      <div className="btn-overlay mobviwhde">
                        <Link to="/notfound">
                          <button className='btntransproj mb-5 cursor-target'>Live Demo</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>School Website</h1>
                    <p className='txtclr'>This school website serves as a comprehensive platform, featuring essential pages such as admission for enrollment, franchise details, a convenient locate us page, Pentemind information, and a dedicated Programmes page offering a range of educational options, including Playgroup, Nursery, Kindergarten, Teacher Training Programme, and Daycare services.</p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="/notfound">
                        <button className='btntransproj mb-5'>Live Demo</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <img src={stina} alt='Project 2' className='projectImg img-fluid' />
                      <div className="image-overlay mobviwhde"></div>
                      <div className="btn-overlay mobviwhde">
                        <Link to="/notFound">
                          <button className='btntransproj mb-5 cursor-target'>Live Demo</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>Photography Website</h1>
                    <p className='txtclr'>This Photography website serves as a photography studio where the administrator has the ability to update the images and contents according to their preferences. It provides a platform for the studio owner to showcase their works. Users have the opportunity to view the website and express their admiration for the administrator's work. Additionally, they can easily contact the administrator for further inquiries.</p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="/notFound">
                        <button className='btntransproj mb-5'>Live Demo</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='project col-lg-6 col-sm-12 mb-4'>
                  <div className='divpad'>
                    <div className="image-wrapper cursor-target">
                      <img src={finance} alt='Project 1' className='projectImg img-fluid' />
                      <div className="image-overlay mobviwhde"></div>
                      <div className="btn-overlay mobviwhde">
                        <Link to="/notfound">
                          <button className='btntransproj mb-5 cursor-target'>Live Demo</button>
                        </Link>
                      </div>
                    </div>

                    <h1 className='txtclr my-4 bigfn spclfn1'>Finance Web Application</h1>
                    <p className='txtclr'>The Finance web application is designed for a Gold Finance Vendors' website. With this application, customers can store their loan information and generate bills for both receiving and repaying loans. A web application should be capable of performing four fundamental operations: Create, Read, Update, and Delete.</p>
                    {/* Mobile View */}
                    <div className="mobhd">
                      <Link to="/notFound">
                        <button className='btntransproj mb-5'>Live Demo</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </section>


          <section className='skillsec col-lg-12 col-sm-12' id="skillsec">
            <Zoom cascade triggerOnce='true' >
              <h1 className='txtclr text-center py-5 bigfn spclfn'>Skills</h1>
              <div className='d1-flex flex-wrap skillswrapper py-4 '>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg} alt='Html' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Html</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg1} alt='CSS' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>CSS</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg2} alt='JavaScript' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>JavaScript</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg9} alt='TypeScript' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>TypeScript</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg4} alt='React JS' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>React JS</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg5} alt='Node JS' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Node JS</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg10} alt='Tailwind CSS' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Tailwind CSS</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg3} alt='Php' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Php</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg6} alt='Bootstrap' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Bootstrap</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg7} alt='Java' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Java</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg8} alt='MySQL' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>MySQL</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg12} alt='Dart' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Dart</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg13} alt='Flutter' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Flutter</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg16} alt='Git' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Git</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg17} alt='Github' className='skillImg invert cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Github</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg14} alt='Webflow' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Webflow</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg11} alt='Figma' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Figma</h5>
                </div>
                <div className='text-center txtclr col-lg-3 col-sm-3 p-4 hov'>
                  <img src={skillImg15} alt='Power BI' className='skillImg cursor-target' loading='lazy' />
                  <h5 className='pt-2 fs-6'>Power BI</h5>
                </div>
              </div>
            </Zoom>
          </section>

          <section className='certificationssec col-lg-12 col-sm-12 py-5' id="certificationssec">
            <Fade cascade fraction={0.5} triggerOnce='true'>
              <div className=' col-lg-12 col-sm-12'>
                <h1 className='txtclr text-center pt-5 bigfn spclfn'>Certifications</h1>
              </div>
              <div className='certifiactions-container txtclr mx-4 mx-md-5'>
                <div className='divpad'>
                  {/* <div className="cert-item">
                    <h3><span>Flutter</span></h3>
                    <img src={FlutterCertificate} alt="Flutter Certificate" />
                  </div>

                  <div className="cert-item">
                    <h3><span>UI/UX Design</span></h3>
                    <img src={UIUXCertificate} alt="UI/UX Design Certificate" />
                  </div>

                  <div className="cert-item">
                    <h3><span>Business Analysis</span></h3>
                    <img src={BusinessAnalysisCertificate} alt="Business Analysis Certificate" />
                  </div>

                  <div className="cert-item">
                    <h3><span>Java</span></h3>
                    <img src={JavaCertificate} alt="Java Certificate" />
                  </div> */}

                  <FlowingMenu items={FlowingMenuItems} />

                </div>
              </div>
            </Fade>
          </section>

          <section className='contactsec col-lg-12 col-sm-12 py-5' id="contactsec">
            <Fade cascade fraction={0.5} triggerOnce='true'>
              <h1 className='txtclr text-center pt-5 bigfn spclfn'>Let's Talk</h1>
              <p className='txtclr text-center fs-5'>Feel Free to Reach Me</p>
              <form action="https://formsubmit.co/ijaas.mindtek@gmail.com" method="POST">
                <input type='text' name='name' placeholder='Name' className='inptxt cursor-target' required />
                <input type='email' name='email' placeholder='Email' className='inptxt cursor-target' required />
                <input type='text' name='subject' placeholder='Subject' className='inptxt cursor-target' required />
                <textarea rows='4' name='message' placeholder='Message' className='inptxt cursor-target' required ></textarea>
                <button type='submit' className='contactbtn mb-5 cursor-target'>Submit</button>
              </form>
            </Fade>
          </section>

          <footer>
            <div className='container footerflex'>
              <div>
                <img src={logo} className="logofoot" alt="logo" />
              </div>
              <div>
                <p className='txtclr m-0' style={{ fontSize: '0.9rem', color: 'gray' }}>
                  &copy; {new Date().getFullYear()} Ijaas Ahamed. All Rights Reserved.
                </p>
              </div>
              <div className=' logoend'>
                <span className='social-logo-foot cursor-target' onClick={handleClick}>
                  <IoMail />
                </span>
                <a href="https://in.linkedin.com/in/ijaas-ahamed" target="_blank" rel="noopener noreferrer" className='social-logo-foot cursor-target'>
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/IjaasAhamed" target="_blank" rel="noopener noreferrer" className='social-logo-foot cursor-target'><FaGithub /></a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
