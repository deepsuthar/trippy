import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import aboutImg from "../assets/night.jpg"

function About (){
    return(
        <>
       <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="About"
        />
        </>
    )
}

export default About;