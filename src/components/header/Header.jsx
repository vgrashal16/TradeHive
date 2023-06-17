import "./header.css";

function Header() {
    return (
        <>
        <div className="header">
            <div className="title">
                <p>TradeHive</p>
            </div>

            <div className="buttons">
                <button id="login">Login</button>
                <span className="sep">|</span>
                <button id="register">Register</button>
            </div>
        </div>
        </>
    );
}

export default Header;