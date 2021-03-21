// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled, Head} from "frontity"
import Switch from "@frontity/components/switch"
import Link from "@frontity/components/link"
import List from "./list"
import Header from "./header/index"
import MobileSearch from "./header/mobileSearch"
import MobileMenu from "./header/mobileMenu"
import { useMediaQuery } from 'react-responsive'
import IndexBody from "./index/index"

const Root = ({ state }) => {
  const isDesktop = useMediaQuery({query: '(min-width: 920px)'})
  const isMobile = useMediaQuery({ query: '(max-width: 919px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  const data = state.source.get(state.router.link)
  return (
    <>
      <Head>
        <title>Pisapapeles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=no"/>
        <html lang="es" />
      </Head>
      <Global styles={GlobalStyle}/>
      <Header />
      <Container>
        <Switch>
          <IndexBody when={data.isArchive} />
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage}>This is a page</div>
        </Switch>
      </Container>
      <Container>
        {isDesktop && <p>You are a desktop or laptop</p>}
        {isMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}
      </Container>
      <Container>
        <h1>Hello Frontity</h1>
        <p>Current URL: {state.router.link}</p>
      </Container>
      {state.theme.isMobileSearchVisible ? (
        <MobileSearch/>
      ): null}
      {state.theme.isMobileMenuVisible ? (
        <MobileMenu/>
      ): null}
    </>
  )
}

export default connect(Root)

const Container = styled.div`
  background-color: #141414;
  color: white;
  width: auto;
  padding: 10px;
  transition: border-radius ease 0.2s;
  transition: margin ease 0.2s;
  @media(min-width: 576px){
    border-radius: 0px;
    margin: 20px 0px;
  }
  @media(min-width: 1000px){
    border-radius: 10px;
    margin: 20px 10px;
  }
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
`

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  html {

  }
  body {
    margin: 0px;
  }
`
