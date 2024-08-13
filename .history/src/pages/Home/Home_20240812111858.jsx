
/* import '../../styles/Home.css'; */
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
                    <h1>Home</h1>
                </div>
            </div>
        </>
    )
}