import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"

const Header = ({state})=> {
  return(
    <HeaderBG>
      <HeaderContent>
        <Logo src="https://static.pisapapeles.net/uploads/2019/03/logopp380x89.png"/>
        <Menu>
          <MenuLink link="/noticias">NOTICIAS</MenuLink>
          <MenuLink link="/noticias">REVIEWS</MenuLink>
          <MenuLink link="/noticias">RUMORES</MenuLink>
          <MenuLink link="/noticias">COLUMNAS</MenuLink>
          <MenuLink link="/noticias">GUÍAS</MenuLink>
          <MenuLink link="/noticias">JUEGOS</MenuLink>
        </Menu>
      </HeaderContent>
    </HeaderBG>
  )
}

export default connect(Header)


const HeaderBG= styled.div`
  background-color: #141414;
  width: auto;
  color: white;
  height: 80px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  margin: 10px 10px;

`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 1170px;
  margin: auto;
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
  margin-left: 40px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 14px;
`
