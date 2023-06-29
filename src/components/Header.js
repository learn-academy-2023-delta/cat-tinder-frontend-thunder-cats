
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
                <Link to="/catindex"> CatIndex </Link>
                <Link to="/catshow"> CatShow </Link>
                <Link to="/catnew"> CatNew </Link>
                <Link to="/catedit"> CatEdit </Link>
            </div>
        </div>
    )
}

export default Header