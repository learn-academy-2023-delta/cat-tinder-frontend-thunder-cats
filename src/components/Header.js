import React, { useState}  from 'react';
import Logo from '../assets/7.png';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Header = ({ direction, ...args }) => {
//     return (
//         <div className="navbar">
//             <div className="leftSide">
//                 <h1>💕Thunder Cats Tinder💕</h1>
//             </div>

//             <div className="rightSide">
//                 <Link to="/"> Home </Link>
//                 <Link to="/catindex"> CatIndex </Link>
//                 <Link to="/catshow"> CatShow </Link>
//                 <Link to="/catnew"> CatNew </Link>
//                 <Link to="/catedit"> CatEdit </Link>
//             </div>
//         </div>
//     )
// }
const [openLinks, setOpenLinks] = useState(false)

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);

const toggleNavbar = () => {
  setOpenLinks(!openLinks)
}

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks? "open": "close"}>
        {/* test for the image logo */}
        <img src={Logo} alt="lion-o"></img>
        <div className="hiddenLinks">
            {/* test for the hidden links */}
          <Link to="/"> Home </Link>
          <Link to="/catindex"> Cat Index </Link>
          <Link to="/catnew"> Cat New </Link>
        </div>
      </div>

      <div>
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret><i>explorandum amor</i></DropdownToggle>
        <DropdownMenu {...args}>
          <div className='links'>
          <DropdownItem>
             <Link to="/">Home</Link>
          </DropdownItem>
          <DropdownItem>
             <Link className="links" to="/catindex">Cat Index</Link>
          </DropdownItem>
          <DropdownItem>
             <Link to="/catnew">Cat New</Link>
          </DropdownItem>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</div>
  )
    }



export default Header

