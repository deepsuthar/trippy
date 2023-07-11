import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import aboutImg from "../assets/night.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
       <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Service"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;