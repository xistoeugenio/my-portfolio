import './myPortfolio.scss';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import AboutMe from './components/aboutMe/AboutMe';
import Contact from './components/contact/Contact';

export default function MyPortfolio() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <section className='sections'>
        <div className="section">
          <Profile />
        </div>
        <div className="section">
          <Contact/>
        </div>
        <div className='section' id='portfolio'>
          < Portfolio />
        </div>
        <div className='section'>
          < AboutMe />
        </div>
      </section>
    </div>
  );
}

