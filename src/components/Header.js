import React, { useState}  from 'react';
import Logo from '../assets/7.png';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Header = ({ direction, ...args }) => {

const [dropdownOpen, setDropdownOpen] = useState(false);

const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="lion-o"></img>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/catindex"> Cat Index </Link>
          <Link to="/catnew"> Cat New </Link>
        </div>
      </div>
      <div className="d-flex p-5">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
          <DropdownToggle caret><i>explorandum amor</i></DropdownToggle>
          <DropdownMenu {...args}>
            <div className='links'>
            <DropdownItem>
                <Link to="/">Home</Link>
            </DropdownItem>
            <DropdownItem>
                <Link className="links" to="/catindex">List of Thunder Cats</Link>
            </DropdownItem>
            <DropdownItem>
                <Link to="/catnew">Create New Thunder Cat</Link>
            </DropdownItem>
            </div>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
    </>
  )
}



export default Header