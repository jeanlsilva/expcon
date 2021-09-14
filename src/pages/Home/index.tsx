import BlackSection from '../../components/BlackSection';
import CyanSection from '../../components/CyanSection';
import FinalSection from '../../components/FinalSection';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import RedSection from '../../components/RedSection';
import YellowSection from '../../components/YellowSection';

export default function Home() {
    return (
        <>
            <Hero />
            <RedSection />
            <YellowSection />
            <BlackSection />
            <CyanSection />
            <FinalSection />
            <Footer />
        </>
    );
}