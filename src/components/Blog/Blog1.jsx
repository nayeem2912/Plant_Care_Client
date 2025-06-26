import React from 'react';
import TopIndoorPlants from './TopIndoorPlants';
import WateringTips from './WateringTips';
import SunlightGuide from './SunlightGuide';
import DIYFertilizers from './DIYFertilizers';
import PlantPestControl from './PlantPestControl';
import SeasonalPlantCare from './SeasonalPlantCare';
import AirPurifyingPlants from './AirPurifyingPlants';

const Blog1 = () => {
    return (
        <div className='space-y-4'>
           <TopIndoorPlants></TopIndoorPlants>
           <WateringTips></WateringTips>
           <SunlightGuide></SunlightGuide>
           <DIYFertilizers></DIYFertilizers>
           <PlantPestControl></PlantPestControl>
           <SeasonalPlantCare></SeasonalPlantCare>
           <AirPurifyingPlants></AirPurifyingPlants>
        </div>
    );
};

export default Blog1;