import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Paralax</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
