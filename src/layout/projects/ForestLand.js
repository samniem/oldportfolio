import React from 'react';
import './Projects.css'

import studyarea from './Images/study-area.png';
import latlong from './Images/latlong.png';
import S1AIW2imageVH from './Images/S1AIW2imageVH.png';
import S1ACalibrated from './Images/S1ACalibrated.png';
import Deburst from './Images/after-deburst-vh.jpg';
import Multilook from './Images/multilooked-vh.jpg';
import Speckle from './Images/s1aspecklefiltered.png';
import Terrain from './Images/subset-terrain-corrected.png';
import S1RGB from './Images/s1rgb.png';
import S2RGB from './Images/s2rgb.png';
import S2BANDS from './Images/s2b-bands.jpg';
import S1S2MIX from './Images/s1s2mix.png';
import CORINE12 from './Images/corine12.png';
import RESULTSNEW from './Images/results-new.png';
import S1RGBVARS from './Images/s1rgbvars.png';
import S1S2RGBVARS from './Images/s1s2rgbvars.png';
import S2BANDVARS from './Images/s2bandsvars.png';
import S1BASIC from './Images/s1basicnewconfusion.png';
import S1CONFUSION from './Images/s1rgbconfusion.png';
import S1S2CONFUSION from './Images/s1s2confusion-new.png';
import S2CONFUSION from './Images/s2confusion-new-new.png';

function ForestLand(){
        return (
            <div className="Container">
                <h1>Random Forest Land Classification</h1>

                <h2>1. Overview</h2>
                    <p >Using ESA SNAP toolbox together with Sklearn and Jupyter 
                        notebook to perform land classification over Finland. 
                        Random forest algorithm with 20 trees has been utilized 
                        to perform the land classification.</p>
                    <h2 >2. Sentinel-1A Product</h2>
                    <img src={studyarea}  alt="Studyarea" />
                    <p >Study area.</p>
                    <img src={latlong}  alt="latlong" />
                    <p >Study area latitude and longitude limits corresponding x and y coordinates.</p>
                    <img src={S1AIW2imageVH}  alt="S1AIW2" />
                    <p >
                    S1A IW2 band before processing.
                    </p>
                    <img src={S1ACalibrated}  alt="S1ACalibrated" />
                    <p >
                    S1A product after radiometric calibration.
                    </p>
                    <img src={Deburst}  alt="Deburst" />
                    <p >
                    S1A VH band after TOPS deburst.
                    </p>
                    <img src={Multilook}  alt="Multilook" />
                    <p >
                    S1A after multilooking.
                    </p>
                    <img src={Speckle}  alt="Speckle" />
                    <p >
                    S1A after speckle filtering using Refined Lee filter
                    </p>
                    <img src={Terrain}  alt="Terrain" />
                    <p >
                    Sentinel-1A product after terrain correction
                    </p>
                    <img src={S1RGB}  alt="S1RGB" />
                    <p >
                    S1A RGB product
                    </p>

                <h2 >3. Sentinel-2B Product</h2>
                    <img src={S2RGB}  alt="S2RGB" />
                    <p >
                    S2B RGB product with B4 as red, B3 as green and B2 as blue.
                    </p>
                    <img src={S2BANDS}  alt="S2BANDS" />
                    <p >
                    S2B bands.
                    </p>

                <h2 >4. Sentinel-1A and Sentinel-2B RGB Mix</h2>
                    <img src={S1S2MIX}  alt="S1S2MIX" />
                    <p >
                    S2 B4 as red, S1 VH as green, S2 B2 as blue
                    </p>

                <h2 >5. Corine2012 Product</h2>
                    <p >
                    The Corine2012 product has been resampled from 100 m 
                    resolution to 20 m resolution to match Sentinel-1 product 
                    and Sentinel-2 product resolution.
                    </p>
                    <img src={CORINE12}  alt="CORINE12" />
                    <p >
                    Corine2012 product of the study area. 
                    During Python processing Corine land classes have been 
                    converted to five major classes:
                    <ul>
                        <li>Agricultural surfaces</li>
                        <li>Agricultural areas</li>
                        <li>Forest and semirural areas</li>
                        <li>Wetlands</li>
                        <li>Water bodies</li>
                    </ul>
                    </p>

                <h2 >6. Collocation of Products</h2>
                    <p >
                    The collocated data has been converted into three separate 
                    CSV formatted data sets to be run on the random forest 
                    algorithm. Each CSV products has a total of 21,855,475 rows. 
                    Sentinel-1 product has three attributes as columns, red 
                    color, green color and blue color. Sentinel-2 product has 
                    13 attributes in total corresponding to all of the Sentinel-2 bands. 
                    Sentinel-1 and Sentinel-2 RGB product has three attributes and 
                    Sentinel-1 VV+VH has two attributes.
                    </p>

                <h2 >7. Results</h2>
                    <img src={RESULTSNEW}  alt="RESULTSNEW" />
                    <p >
                    Land class prediction accuracy results on 0.3 ratio test data with 20 trees.
                    </p>

                <h3 >7.1 Attribute Importances For Making Predictions</h3>
                    <p >
                    For Sentinel-1 RGB product land classification, green color attribute 
                    is the most important for correct prediction, followed by red color 
                    attribute and blue color attribute being the least important.
                    </p>
                    <img src={S1RGBVARS}  alt="S1RGBVARS" />
                    <p >
                    Sentinel-1 RGB attributes relative importance for correctly 
                    predicting land class. B1 = red, B2 = green, B3 = blue.
                    </p>
                    <img src={S1S2RGBVARS}  alt="S1S2RGBVARS" />
                    <p >
                    S1 and S2 RGB product attribute importances, in figure B1 
                    = sentinel-2 B4, B2 = Sentinel-1 VH, B3 = Sentinel-2 B2.
                    </p>
                    <img src={S2BANDVARS}  alt="S2BANDVARS" />
                    <p >
                    Sentinel-2 bands relative importance for correctly 
                    predicting land class.
                    </p>

                <h3 >7.2 Confusion Matrices</h3>
                    <img src={S1BASIC}  alt="S1BASIC" />
                    <p >
                    Sentinel-1 VV and VH sigma0 confusion matrix.
                    </p>

                    <img src={S1CONFUSION}  alt="S1CONFUSION" />
                    <p >
                    Sentinel-1 RGB dual pol ratio sigma0 VV+VH confusion matrix.
                    </p>

                    <img src={S1S2CONFUSION}  alt="S1S2CONFUSION" />
                    <p >
                    Sentinel-1 and Sentinel-2 RGB mix confusion matrix.
                    </p>

                    <img src={S2CONFUSION}  alt="S2CONFUSION" />
                    <p >
                    Sentinel-2 confusion matrix.
                    </p>

            </div>
        )
}


export default ForestLand;