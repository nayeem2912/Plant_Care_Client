import React from 'react';
import BannerSlider from '../components/BannerSlider';
import NewSection from '../components/NewSection';
import TipsSection from '../components/TipsSection';
import EasyGrowPlant from '../components/EasyGrowPlant';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <NewSection></NewSection>
            <TipsSection></TipsSection>
            <EasyGrowPlant></EasyGrowPlant>
        </div>
    );
};

export default Home;