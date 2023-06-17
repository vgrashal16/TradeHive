import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/header.jsx";
import home1 from "../../images/home 1.svg"
import home2 from "../../images/home 2.svg"
import "./home.css"

function Home(){
    return(
        <>
        <div className="home">
            <Header/>
            <div className="headcontent">
                <div className="leftcontent">
                    <img className="home1" src={home1} alt="home 1"/>
                    <h2>
                        “Your gateway to financial freedom 
                        where opportunities meet prosperity”
                    </h2>
                    <p1>
                        Your one-stop destination for stocks and <span className="crypto">cryptocurrencies</span>,<br/>backed by our support.
                    </p1>
                </div>
                <div className="rightcontent">
                    <img className="home2" src={home2} alt="home 2"/>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}

export default Home;