import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Wokrs from "./components/works/Wokrs";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import "./app.scss";


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Wokrs/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
