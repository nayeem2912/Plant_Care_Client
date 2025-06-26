import React, { useEffect } from 'react';
import BannerSlider from '../components/BannerSlider';
import NewSection from '../components/NewSection';
import TipsSection from '../components/TipsSection';
import EasyGrowPlant from '../components/EasyGrowPlant';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Newsletter from '../components/Newsletter';
import CustomerStories from '../components/CustomerStories';
import Promotions from '../components/Promotions';
import PlantExperiments from '../components/PlantExperiments';
import TopRated from '../components/TopRated';
import BlogSection from '../components/BlogSection';
import PlantOfMonth from '../components/PlantOfMonth';

const Home = () => {
        useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

    
    return (
        <div>
            <BannerSlider></BannerSlider>
            <NewSection></NewSection>
            <TopRated></TopRated>
            <PlantExperiments></PlantExperiments>
            <PlantOfMonth></PlantOfMonth>
            <BlogSection></BlogSection>
            <Promotions></Promotions>
            <CustomerStories></CustomerStories>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;