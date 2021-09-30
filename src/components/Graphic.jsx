import React from 'react'
import styles from './Graphic.css'

import fnz1 from '../img/fnz1.jpg'
import fnz2 from '../img/fnz2.jpg'
import fnz3 from '../img/fnz3.jpg'
import edith1 from '../img/edith2.jpg'
import rolling1 from '../img/rolling2.jpg'
import elton1 from '../img/elton1.jpg'
import rmcv1 from '../img/rmcv1.jpg'
import rmcv2 from '../img/rmcv2.jpg'
import rmcv3 from '../img/rmcv3.jpg'
import datacom1 from '../img/datacom1.jpg'
import datacom2 from '../img/datacom2.jpg'
import callumtall from '../img/callum-tall.jpg'
import webinar from '../img/webinar.jpg'
import accenture1 from '../img/accenture1.jpg'
import pulse1 from '../img/coverpage_Page_01.jpg'
import pulse2 from '../img/coverpage_Page_24.jpg'
import pulse3 from '../img/coverpage_Page_32.jpg'

function Graphic(){
    return (
            <div>
                <h2>Graphic Design</h2>
                <div className="spread-parent">
                    <div className="spread">
                        <h3>Report for clients</h3>
                        <img 
                            alt="Student Pulse Report, Sample 1" 
                            src={pulse1}
                        />
                        <img 
                            alt="Student Pulse Report, Sample 2" 
                            src={pulse2}
                        />
                        <img 
                            alt="Student Pulse Report, Sample 3" 
                            src={pulse3}
                        />
                    </div>
                    {/* <div className="spread">
                        <h3>FNZ's 2022 Graduate Recruitment Campaign</h3>
                        <img 
                            alt="FNZ Graduate Campaign, Sample 1" 
                            src={fnz1}
                        />
                        <img 
                            alt="FNZ Graduate Campaign, Sample 2" 
                            src={fnz3}
                        />
                    </div> */}
                    <div className="spreadLong">
                        <h3>More social media assets</h3>
                        <img 
                            alt="FNZ Graduate Campaign, Sample 3" 
                            src={fnz1}
                        />
                        <img 
                            alt="Datacom Graduate Campaign, Sample 1" 
                            src={callumtall}
                        />
                        <img 
                            alt="Datacom Graduate Campaign, Sample 1" 
                            src={datacom1}
                        />
                        <img 
                            alt="RMCV Graduate Campaign, Sample 1" 
                            src={rmcv1}
                        />
                        <img 
                            alt="Datacom Graduate Campaign, Sample 2" 
                            src={accenture1}
                        />
                        <img 
                            alt="Datacom Graduate Campaign, Sample 2" 
                            src={webinar}
                        />
                    </div>
                    <div className="spread">
                        <h3>Concerts Posters and Digital Assets</h3>
                        <img 
                            alt="Concert Posters" 
                            src={elton1}
                        />
                        <img 
                            alt="Concert Posters" 
                            src={rolling1}
                        />
                        
                        <img 
                            alt="Concert Posters" 
                            src={edith1}
                        />
                    </div>
                    {/* <div className="spread">
                        <h3>Russell McVeagh's 2021 Graduate Recruitment Campaign</h3>
                        <img 
                            alt="RMCV Graduate Campaign, Sample 2" 
                            src={rmcv3}
                        />
                        <img 
                            alt="RMCV Graduate Campaign, Sample 3" 
                            src={rmcv2}
                        />
                    </div> */}
                </div>
            </div>
    )
}


export default Graphic