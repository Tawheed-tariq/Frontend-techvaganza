import '../../styles/Home.css'
import Intro from './Components/Intro'
import About from './Components/About'
import Highlights from './Components/Highlights'
import Sponsors from './Components/Sponsors'
import Events from './Components/Events'

export default function Home(){
    return(
        <>
            <div class="background-image bg-1"></div>
            <div class="background-image bg-2"></div>
            <div class="background-image bg-3"></div>

            <div class="glass-layer"></div>

            <div class="content">
                <div >
                    <Intro/>
                </div>
            </div>
        </>
    )
}