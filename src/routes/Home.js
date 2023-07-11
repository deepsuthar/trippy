import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import homeImg from "../assets/12.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
        <NavBar/>
        <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journy Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home;