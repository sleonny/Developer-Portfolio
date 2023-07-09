import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Resume from "./components/resume/resume";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
