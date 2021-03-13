// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Header from "./header"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <Global styles={GlobalStyle}/>
      <Header />
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
    </>
  )
}

export default connect(Root)

const Container = styled.div`
  background-color: #141414;
  color: white;
  margin: 10px 10px;
`

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins');
  html {

  }
  body {
    margin: 0px;
  }
`
