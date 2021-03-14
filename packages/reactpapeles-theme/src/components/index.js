// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled, Head} from "frontity"
import Link from "@frontity/components/link"
import Header from "./header/index"
import { useMediaQuery } from 'react-responsive'

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
        <html lang="es" />
      </Head>
      <Global styles={GlobalStyle}/>
      <Header />
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
      <Container>
        {data.items.map((item) => {
          return (
            <div key={item.id}>
              {item.type} – {item.id} – {item.link}
            </div>
          )
        })}
      </Container>
      <Container>
        {data.items.map((item) => {
          return (
            <div key={item.id}>
              {item.type} – {item.id} – {item.link}
            </div>
          )
        })}
      </Container>
      <Container>
        {data.items.map((item) => {
          return (
            <div key={item.id}>
              {item.type} – {item.id} – {item.link}
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default connect(Root)

const Container = styled.div`
  background-color: #141414;
  color: white;
  margin: 10px 10px;
  width: auto;
`

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  html {

  }
  body {
    margin: 0px;
  }
`
