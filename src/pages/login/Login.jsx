import "./login.css";
import Loginbar from "../../components/login/LoginBar";"../../components/login/LoginBar.jsx"
import graph from "../../../svgs/login_graph.svg"
import logo_black from "../../../svgs/logo_black.svg"

function Login(){
    return (
    <>  
    <div className="login">
        <div className="leftcontent">
            <img id="logo" src= {logo_black} alt="Logo"/>
            <p>Login to access your portfolio and start trading!</p>
            <img src= {graph} alt="Graph"/>
        </div>
        <div className="rightcontent">
            <Loginbar/>
        </div>
    </div>
    </>
    );
}

export default Login;

