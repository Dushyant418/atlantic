import logo from './logo.svg';
import './App.css';
import HeroSection from './component/HeroSection';
import Root from './assets/css/root.css'
import Numbers from './component/Numbers';
import Footer from './component/Footer';
import Lubricant from './component/Lubricant';
import Approvals from './component/Approvals';

function App() {
  return (
    <>
      <HeroSection />
      <Lubricant />
      <Approvals />
      <Numbers />
      <Footer />
    </>
  );
}

export default App;
