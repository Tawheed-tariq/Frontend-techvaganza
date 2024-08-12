

import Intro from './Components/Intro'
import About from './Components/About'
import Highlights from './Components/Highlights'
import Sponsors from './Components/Sponsors'
import Events from './Components/Events'

import '../../styles/Home.css';
import Header from'./components/Header';



export default function Home(){
    return(
        <> 
        <div className='container'>
            <Header />
        </div>
            <div className="background-image bg-1"></div>
            <div className="background-image bg-2"></div>
            <div className="background-image bg-3"></div>

            <div className="glass-layer"></div>

            <div className="content">
                <div >
                    <Intro/>
                </div>
            </div>
        </>
    )
}