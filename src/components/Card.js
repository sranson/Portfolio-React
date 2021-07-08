import React from 'react';
import '../Assets/Styles/Card.css';
import Salome from '../Assets/Images/Salome.jpg';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';



const Card = () => {
    return (
        <div style={{ paddingTop: "4%" }}>
            <main className="container">
                <body>
                    <div>
                        <div className="customCenterContent" style={{paddingTop: "3%"}}>
                            <img src={Salome} alt="Photo of Salome" className="circle" />
                        </div>
                    </div>

                    <div className="customCenterContent" style={{paddingBottom: "3%", paddingTop: "3%"}}>
                        <h2>Software Developer | Lifelong Learner</h2>
                    </div>

                    <div className="customCenterContent">
                        <h4>Hello, my name is Salome Ranson. I am a full-stack web developer based in Atlanta, GA.</h4>
                    </div>

                    <div className="customCenterContent" style={{paddingBottom: "3%"}}>
                        <h5>Feel free to take a look at my latest projects on the <em><a href="/projects">My Work</a></em> Page.</h5>
                    </div>
                </body>
            </main>
        </div>
    );
};



export default Card;