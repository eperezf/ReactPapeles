import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = ({state})=> {
  return(
    <HeaderBG>
      <HeaderContent>
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
      </HeaderContent>
    </HeaderBG>
  )
}

export default connect(Header)


const HeaderBG= styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  transition: border-radius ease 0.2s;
  transition: margin ease 0.2s;
  @media(min-width: 576px){
    border-radius: 0px;
    margin: 0px 0px;
  }
  @media(min-width: 992px){
    border-radius: 10px;
    margin: 10px 10px;
  }
  background-color: #141414;
  width: auto;
  color: white;
  height: 80px;

  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);


`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0px 10px;
  @media(min-width: 1210px){
    width: 1170px;
    margin: auto;
  }
`
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
