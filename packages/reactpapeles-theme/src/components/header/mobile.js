import React from "react"
import {connect, styled, css} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMoon, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'


const MobileHeader = ({state, actions}) => {
  return (
    <>
      <MenuIconL>
          <FontAwesomeIcon icon={faSearch} onClick={actions.theme.toggleMobileSearch}/>
      </MenuIconL>
      <Logo src="https://static.pisapapeles.net/uploads/2019/03/logopp380x89.png"/>
      <MenuIconR>
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faBars} onClick={actions.theme.toggleMobileMenu}/>
      </MenuIconR>
    </>
  )
}

export default connect(MobileHeader)


const Logo = styled.img`
  height: 45px;
  width: auto;
  justify-content:center;
  display:flex;
`

const Menu = styled.div`
  display: flex;
`

const MenuIconL = styled.div`
  display:flex;
  flex:1;
  font-size: 20px;
`

const MenuIconR = styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;

  svg {
    margin-left:20px;
    font-size: 20px;
  }


`
