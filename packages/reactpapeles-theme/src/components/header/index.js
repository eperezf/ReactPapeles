import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faRss, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'
import {useMediaQuery} from 'react-responsive'
import MediaQuery from 'react-responsive'
import DesktopHeader from './desktop'
import MobileHeader from './mobile'

const Header = ({state})=> {
  const isDesktop = useMediaQuery({query: '(min-width: 920px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 919px)' })
  return(
    <HeaderBG>
      <HeaderContent>
        <MediaQuery minWidth={980}>
          <DesktopHeader/>
        </MediaQuery>
        <MediaQuery maxWidth={979}>
          <MobileHeader/>
        </MediaQuery>
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
  @media(min-width: 980px){
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
