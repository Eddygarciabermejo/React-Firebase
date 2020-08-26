import React from 'react';
import '../assets/styles/container/list.css'

import Jobs from '../assets/imagenes/jobs.jfif'

const List = () => {

    return(
        <section className="mainsec">
        <div className="jobss">
            <div>
                <img className="imagenes-jobs" src={Jobs} alt=""/>
            </div>
            <div className="text-divs">  
                <p className="title-jobs">Paint Jobs</p>
                <p>Create at: 20/08/2020</p>
            </div>
            <div>
                <button>View</button>
            </div>
        </div>

        <div className="jobss">
            <div>
                <img className="imagenes-jobs" src={Jobs} alt=""/>
            </div>
            <div className="text-divs">  
                <p className="title-jobs">Paint Jobs</p>
                <p>Create at: 20/08/2020</p>
            </div>
            <div>
                <button>View</button>
            </div>
        </div>

        <div className="jobss">
            <div>
                <img className="imagenes-jobs" src={Jobs} alt=""/>
            </div>
            <div className="text-divs">  
                <p className="title-jobs">Paint Jobs</p>
                <p>Create at: 20/08/2020</p>
            </div>
            <div>
                <button>View</button>
            </div>
        </div>

        <div className="jobss">
            <div>
                <img className="imagenes-jobs" src={Jobs} alt=""/>
            </div>
            <div className="text-divs">  
                <p className="title-jobs">Paint Jobs</p>
                <p>Create at: 20/08/2020</p>
            </div>
            <div>
                <button>View</button>
            </div>
        </div>
    </section>
    )
}

export default List;