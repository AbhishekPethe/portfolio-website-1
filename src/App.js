import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

import Testimonials from "./components/testimonials/Testimonials";

export default function App(){
    return(
        <>
            <Header />
            <About />
            <Nav />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        
            
        </>
    )
}