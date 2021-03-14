import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'


const DesktopHeader = ({state}) => {
  const {menu} = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  return (
    <>
      <Logo src="https://static.pisapapeles.net/uploads/2019/03/logopp380x89.png"/>
      <Menu>
        {isThereLinks &&
          menu.map(([name,link])=>(
            <MenuLink link={link}>{name}</MenuLink>
          ))}
      </Menu>
      <Social>
        <Link link="https://facebook.com/pisapapeles">
          <FontAwesomeIcon icon={faFacebook}/>
        </Link>
        <Link link="https://twitter.com/pisapapeles">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link link="https://instragram.com/pisapapeles">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link link="#">
          <FontAwesomeIcon icon={faSpotify} />
        </Link>
        <Link link="https://pisapapeles.net/rss">
          <FontAwesomeIcon icon={faRss} />
        </Link>
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
  text-transform: uppercase;
`

const Social = styled.div`
  margin-left: auto;

  svg {
    margin-left: 15px;
  }

  a {
    color: white;
    text-decoration: none;
  }
`
