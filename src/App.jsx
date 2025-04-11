import './App.scss';
import Header from './components/header/Header';
import Contact from './sections/contact/Contact';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';
import Skills from './sections/skills/Skills';
import Footer from './components/footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init({
  duration: 750,
  once: true,
  anchorPlacement: 'center-center',
});

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
