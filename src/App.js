import './App.css';
import Carousel from './components/Carousel';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PrimaryInfoSection } from './components/PrimaryInfoSection';
import { SecondryInfoSection } from './components/SecondryInfoSection';

function App() {
  const items = Array.from({ length: 10 }, (_, i) => <div key={i}>{i + 1}</div>);
  return (
    <div className="App">
      <Header/>
      <PrimaryInfoSection/>
      <Carousel items={items} />
      <SecondryInfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
