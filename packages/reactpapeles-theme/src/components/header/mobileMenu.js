import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faTimes} from '@fortawesome/free-solid-svg-icons'

const MobileSearch = ({state, actions}) => {
  const {menu} = state.theme;
  const isThereLinks = menu != null && menu.length > 0;
  return (
    <>
      <MenuModal>
        <CloseIcon icon={faTimes} onClick={actions.theme.toggleMobileMenu}/>
        <Logo src="https://static.pisapapeles.net/uploads/2019/03/logopp380x89.png"/>
        <Menu>
          {isThereLinks &&
            menu.map(([name,link])=>(
              <MenuLink link={link} key={name}>{name}</MenuLink>
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
        </Social>
      </MenuModal>
    </>
  )
}

const MenuModal = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  flex: 1;
  position:fixed;
  z-index:110;
  background-color: #141414f4;
  backdrop-filter:blur(4px);
  color: white;
  display: grid;
  align-content:start;
`
export default connect(MobileSearch)

const Logo = styled.img`
  height: 45px;
  margin: 18px auto;
  width: auto;
  justify-content:center;
  display:flex;
`

const CloseIcon = styled(FontAwesomeIcon)`
  font-size:30px;
  position:absolute;
  top: 25px;
  right: 20px;
`

const MenuLink = styled(Link)`
  color: white;
  margin: 0px auto;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-align:center;
  background-color: #141414;
  padding: 15px 0px;
  width:100%;
  border-top: 2px solid #222222;
  border-bottom: 2px solid #222222;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

`

const Social = styled.div`
  justify-content:space-evenly;
  display:flex;
  flex-direction:row;

  a {
    color: white;
    text-decoration: none;
  }
`
