import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import aboutImg from "../assets/2.jpg"

function Contact (){
    return(
        <>
       <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Contact"
        />
        </>
    )
}

export default Contact;