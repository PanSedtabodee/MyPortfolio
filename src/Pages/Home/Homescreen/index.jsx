import FirstSection from "../firstSection";
import ContactMe from "../contactMe";
import Navbar from "../navbar";

export default function Homescreen() {
    return (
        <div>
            <Navbar />
            <div className="mt-10">
            <FirstSection />
            </div>
            <ContactMe />
        </div>
    )
}