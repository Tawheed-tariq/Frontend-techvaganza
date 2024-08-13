
import Header from'../../Components/Header';



import Intro from './Components/Intro'
import About from './Components/About'
import Highlights from './Components/Highlights'
import Sponsors from './Components/Sponsors'
import Events from './Components/Events'





export default function Home(){
    return(
        <> 
            <div className="background-image bg-1"></div>
            <div className="background-image bg-2"></div>
            <div className="background-image bg-3"></div>

            <div className="glass-layer"></div>

            <div className="content">
                    <Header />
                <div >
                    <Intro/>
                    <About/>
                    <Highlights/>
                    <Sponsors/>
                    <Events/>
                </div>
            </div>
        </>
    )
}