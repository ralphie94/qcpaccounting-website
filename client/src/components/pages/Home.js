import React from 'react';
import '../../App.css';
import AboutSection from '../AboutSection';
import HeroSection from '../HeroSection';
import ServicesCards from '../ServicesCards';

function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesCards />
        </>
    );
}

export default Home;