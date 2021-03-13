// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Header from "./header"

const Root = ({ state }) => {
  return (
    <>
      <Global styles={GlobalStyle}/>
      <Header />
      <Container>
        <h1>Hello Frontity</h1>
        <p>Current URL: {state.router.link}</p>
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/about-us">About Us</Link>
        </nav>
      </Container>
    </>
  )
}

export default connect(Root)

const Container = styled.div`
  background-color: #141414;
`

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  html {
    
  }
  body {
    margin: 0px;
  }
`
