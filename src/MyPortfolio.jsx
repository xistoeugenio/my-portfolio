import './myPortfolio.scss';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import AboutMe from './components/aboutMe/AboutMe';

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
          < AboutMe />
        </div>
        <div className='section'>
          < Portfolio />
        </div>
        <div className='section blue'>
          <div className="content">
            nfdjngklsh
          </div>
        </div>
      </section>
    </div>
  );
}

