import Header from './components/Header';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='main--section'>
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  );
}

export default App;
