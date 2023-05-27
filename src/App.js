import './App.css';
import Footer from './components/Footer';
import Governance from './components/Governance';
import Homesection from './components/Homesection';
import Infosection from './components/Infosection';
import Joincommunity from './components/Joincommunity';
import Moreinfosection from './components/Moreinfosection';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import FAQ from "./components/FAQ/FAQs"
import BlogSection from './components/Blogsection';
import Calendly from './components/Calendlysection';




function App() {
  return (
    <>
    <div className='bgcolor'>
      
    <Navbar/>
    <Homesection />
    <Infosection/>
    <Governance/>
    <Moreinfosection/>
    <Roadmap/>
    <Joincommunity/>
    <Calendly/>
    <FAQ/>
    <BlogSection/>
    <Footer/>

    </div>
    </>
  );
}

export default App;
