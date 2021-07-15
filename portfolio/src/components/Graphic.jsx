import React from 'react'
import fnz1 from '../img/fnz1.jpg'
import fnz2 from '../img/fnz2.jpg'
import fnz3 from '../img/fnz3.jpg'
import edith1 from '../img/edith2.jpg'
import rolling1 from '../img/rolling2.jpg'
import elton1 from '../img/elton1.jpg'
import rmcv1 from '../img/rmcv1.jpg'
import rmcv2 from '../img/rmcv2.jpg'
import rmcv3 from '../img/rmcv3.jpg'


function Graphic(){
    return (
            <div>
                <h2>Graphic Design</h2>
                <div className="spread">
                    <h3>FNZ's 2022 Graduate Recruitment Campaign</h3>
                    <img 
                        alt="FNZ Graduate Campaign, Sample 1" 
                        src={fnz1}
                    />
                    <img 
                        alt="FNZ Graduate Campaign, Sample 2" 
                        src={fnz3}
                    />
                    <img 
                        alt="FNZ Graduate Campaign, Sample 3" 
                        src={fnz2}
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
                <div className="spread">
                    <h3>Russell McVeagh's 2021 Graduate Recruitment Campaign</h3>
                    <img 
                        alt="RMCV Graduate Campaign, Sample 1" 
                        src={rmcv1}
                    />
                    <img 
                        alt="RMCV Graduate Campaign, Sample 2" 
                        src={rmcv3}
                    />
                    <img 
                        alt="RMCV Graduate Campaign, Sample 3" 
                        src={rmcv2}
                    />
                </div>
            </div>
    )
}


export default Graphic