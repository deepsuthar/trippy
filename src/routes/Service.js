import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import aboutImg from "../assets/night.jpg"

function Service (){
    return(
        <>
       <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg={aboutImg}
        title="Service"
        />
        </>
    )
}

export default Service;