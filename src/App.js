import "./App.css"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero"
import Stats from "./components/stats/Stats";
import Bussines from "./components/bussines/Bussines"
import Testimonial from "./components/testimonial/Testimonial";
import Feedback from "./components/feedback/Feedback";
import TryService from "./components/tryService/TryService"
import Comment from "./components/comment/Comment";
import Footer  from "./components/footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Bussines />
      <Testimonial />
      <Feedback/>
      <Comment/>
      <TryService/>
      <Footer/>
    </div>
  );
}

export default App;
