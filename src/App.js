import './App.css';
import Carousel from './components/Carousel';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PrimaryInfoSection } from './components/PrimaryInfoSection';
import { SecondryInfoSection } from './components/SecondryInfoSection';

function App() {
  const items = Array.from({ length: 10 }, (_, i) => <div key={i}>{i + 1}</div>);
  const handleScroll = (e) => {
    const { scrollLeft, scrollTop, clientWidth, scrollWidth } = e.target;
    
    if (scrollLeft > 0 && scrollLeft < scrollWidth - clientWidth) {
      // Prevent horizontal scrolling
      e.preventDefault();
      e.target.scrollLeft = 0;
    }
  };

  return (
    <div className="App" onScroll={handleScroll}>
      <Header/>
      <PrimaryInfoSection/>
      <Carousel items={items} />
      <SecondryInfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
