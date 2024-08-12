import Header from "../../Components/Header";

export default function Home(){
    return(
        <>
            <div className="background-image bg-1"></div>
            <div className="background-image bg-2"></div>
            <div className="background-image bg-3"></div>

            <div className="glass-layer"></div>

            <div className="content">
                <div >
                    <Header/>
                </div>
                <div>
                    <h1>home</h1>
                </div>
            </div>
        </>
    )
}