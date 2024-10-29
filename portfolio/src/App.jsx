import About from "./sections/About"
import Form from "./sections/Form"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Footer from "./sections/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Project1 from "./sections/Project1"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Form />
      <Footer />
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/xiaomistorecentre" element={<Project1 />} />
      </Routes>
    </Router>
  )
}

export default App

