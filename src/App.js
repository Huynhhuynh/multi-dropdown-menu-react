
import './App.scss'
import {ReactComponent as CaretIcon} from './icons/caret.svg'

import React, { useState } from 'react';
import {CSSTransition} from 'react-transition-group'


function App() {

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('main')

  const onChangeActiveMenu = (value) => {
    setActiveMenu(value)
  }

  return (
    <header className="App-header">
      <Navbar>
        <NavItem link="#" name="Trang chủ"></NavItem>
        <NavItem link="#" name="Giới thiệu"></NavItem>
        <NavItem link="#" name="Liên hệ"></NavItem>
        <NavItem link="#!" icon={<CaretIcon />} handleClick={ () => { setDropdownOpen( ! dropdownOpen ) } }>
          <>
            <DropdownMenu open={dropdownOpen}>
              <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit>
                <div>
                  <NavItem link="#!" icon="✌🏻" name="Xin Chào!"></NavItem>
                  <NavItem link="#!" icon="📂" name="Danh mục" handleClick={ () => { onChangeActiveMenu('settings') } }></NavItem>
                  <NavItem link="#!" icon="⚡" name="Trending" handleClick={ () => { onChangeActiveMenu('trending') } }></NavItem>
                </div>
              </CSSTransition>

              <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit>
                  <div>
                    <NavItem link="#!" icon="⇽" name="Trở về" handleClick={ () => { onChangeActiveMenu('main') } }></NavItem>
                    <NavItem link="#!" icon="👂🏼" name="Tin Tức"></NavItem>
                    <NavItem link="#!" icon="🎤" name="Âm nhạc"></NavItem>
                    <NavItem link="#!" icon="🛹" name="Thể thao"></NavItem>
                    <NavItem link="#!" icon="👓" name="Du lịch"></NavItem>
                  </div>
              </CSSTransition>

              <CSSTransition
                in={activeMenu === 'trending'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit>
                  <div>
                    <NavItem link="#!" icon="⇽" name="Trở về" handleClick={ () => { onChangeActiveMenu('main') } }></NavItem>
                    <NavItem link="#!" icon="🤿" name="Facebook"></NavItem>
                    <NavItem link="#!" icon="🔫" name="Tiktok"></NavItem>
                    <NavItem link="#!" icon="🧼" name="Instagarm"></NavItem>
                  </div>
              </CSSTransition>
            </DropdownMenu>
          </>
        </NavItem>
      </Navbar>
    </header>
  );
}
 
function Navbar(props) {
  return (
    <nav> 
      <ul className="navbar">{props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a href={props.link} onClick={props.handleClick}>
        {
          props.icon && 
          <span className="nav-item-icon">
            { props.icon }
          </span>
        }
        {
          props.name
        }
      </a>
      {props.children}
    </li>
  )
}

function DropdownMenu(props) {

  return (
    <>
      {
        props.open &&
        <ul className="dropdown">
          {props.children}
        </ul>
      }
    </>
  )
}
 
export default App;
