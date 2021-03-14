import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'


const DesktopHeader = ({state}) => {
  return (
    <>
      <Logo src="https://static.pisapapeles.net/uploads/2019/03/logopp380x89.png"/>
      <Menu>
        <MenuLink link="/noticias">NOTICIAS</MenuLink>
        <MenuLink link="/reviews">REVIEWS</MenuLink>
        <MenuLink link="/rumores">RUMORES</MenuLink>
        <MenuLink link="/columnas">COLUMNAS</MenuLink>
        <MenuLink link="/guias">GUÍAS</MenuLink>
        <MenuLink link="/juegos">JUEGOS</MenuLink>
      </Menu>
      <Social>
        <FontAwesomeIcon icon={faFacebook}/>
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faSpotify} />
        <FontAwesomeIcon icon={faRss} />
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSearch} />
      </Social>
    </>
  )
}

export default connect(DesktopHeader)


const Logo = styled.img`
  height: 45px;
  width: auto;
`

const Menu = styled.div`
  display: flex;
`

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 14px;
`

const Social = styled.div`
  margin-left: auto;

  svg {
    margin-left: 15px;
  }
`
