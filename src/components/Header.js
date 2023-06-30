
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
                <h1>💕Thunder Cats Tinder💕</h1>
            </div>

            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/catindex"> List of Thunder Cats </Link>
                <Link to="/catnew"> Make a New Thunder Cat </Link>
            </div>
        </div>
    )
}

export default Header