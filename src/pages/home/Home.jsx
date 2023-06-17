import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/header.jsx";
import "./home.css"

function Home(){
    return(
        <>
        <div className="home">
            <div className="posi_header">
                <Header/>
            </div>
            <div className="posi_footer">
                <Footer/>
            </div>

        </div>
        </>
    );
}

export default Home;