import React from 'react';
import './Projects.css'
import LIBDATA from './Images/librariesdataload.png';
import PCAMUSIC from './Images/pca-music.png';
import TRAINTEST from './Images/traintestmusic1.png';
import MLP1 from './Images/mlp1.png';
import MLP2 from './Images/mlp2.png';
import MLP3 from './Images/mlp3.png';
import LABELSMUSIC from './Images/labm.png';

function Neuralnet() {
    return(
        <div className="Container">
                <h1>Music Genre Classification Using MLP Neural Network</h1>
                <p>
                Classify music by genres ranging from rock and blues to 
                classical. The data has 264 features and 4363 songs selected 
                from the Million Song Dataset. For the MLP classifier two 
                accuracy metrics are used: classification accuracy and 
                log-loss for each genre. The music genres used for the data 
                set are

                1. Pop_Rock, 2. Electronic, 3. Rap, 4. Jazz, 5. Latin, 6. RnB, 
                7. International, 8. Country, 9. Reggae and 10. Blues.

                </p>
                
                <h2>Libraries and Data Loading</h2>
                <img src={LIBDATA}alt="LIBDATA" />

                <h2>Principal Component Analysis</h2>
                <img src={PCAMUSIC}alt="PCAMUSIC" />

                <h2>Train-test Split</h2>
                <img src={TRAINTEST} alt="TRAINTEST" />

                <h2>Multilayer Perceptron</h2>
                <img src={MLP1} alt="MLP1" />
                <img src={MLP2} alt="MLP2" />
                <img src={MLP3} alt="MLP3" />

                <h2>Label Prediction</h2>
                <img src={LABELSMUSIC} alt="LABELSMUSIC" />

            </div>
    )
}

export default Neuralnet