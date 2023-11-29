import FirstSection from "../firstSection";
import ContactMe from "../contactMe";
import Navbar from "../navbar";
import Footer from "../footer";
import AboutMe from "../aboutMe";

export default function Homescreen() {
    return (
        <div>
            <Navbar />
            <div className="mt-10">
            <FirstSection />
            </div>
            <AboutMe />
            <ContactMe />
            <Footer />
        </div>
    )
}