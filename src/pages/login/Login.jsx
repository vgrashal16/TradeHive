import "./login.css";
import Loginbar from "../../components/login/LoginBar";"../../components/login/LoginBar.jsx"
import graph from "../../../svgs/login_graph.svg"

function Login(){
    return (
    <>  
    <div className="login">
        <div className="leftcontent">
            <h1>TradeHive</h1>
            <p>Welcome to <span className="head2">TradeHive</span><br/> Login to access your portfolio and start trading!</p>
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

