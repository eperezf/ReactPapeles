import React, {useEffect} from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"
import Link from "@frontity/components/link"

const DestacadoTop = ({state, actions}) => {
  const data = state.source.get("/tag/destacado")
  return (
    <DestacadoTopContainer bgImg={state.source[data.items[0].type][data.items[0].id].jetpack_featured_media_url}>
      <MetaOverlay link={"https://pisapapeles.net"+state.source[data.items[0].type][data.items[0].id].link}>
        <TopMeta>
          <Category>Reviews</Category>
          <Comments>0 Comentarios</Comments>
        </TopMeta>
        <BottomMeta>
          <Title>{state.source[data.items[0].type][data.items[0].id].title.rendered}</Title>
        </BottomMeta>
      </MetaOverlay>
      {console.log(state.source[data.items[0].type][data.items[0].id])}
    </DestacadoTopContainer>
  )
}

export default connect(DestacadoTop)


const DestacadoTopContainer = styled.div`
  width: auto;
  max-width:1170px;
  height: 585px;
  margin-left: auto;
  margin-right: auto;
  background-color: #141414;
  background-image: url("${(props)=>(props.bgImg)}");
  background-size: cover;
  background-position: center;
  color: white;
  transition: border-radius ease 0.2s;
  margin-bottom: 15px:

  @media(min-width: 576px){
    border-radius: 0px;
  }
  @media(min-width: 1170px){
    border-radius: 10px;

  }
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
`

const MetaOverlay = styled(Link)`
  color:white;
  text-decoration: none;
  background: linear-gradient(0deg,rgba(20,20,20,0.6) 0%, rgba(20,20,20,0.3) 100%);;
  width: 100%;
  height: 100%;
  transition: border-radius ease 0.2s;
  display: flex;
  flex: 1;
  flex-direction: column;
  @media(min-width: 576px){
    border-radius: 0px;
  }
  @media(min-width: 1170px){
    border-radius: 10px;

  }
`

const Category = styled.div`
  font-family: 'Poppins', sans-serif;
  color:black;
  background-color: white;
  width:auto;
  padding:0px 15px;
  margin-top: 30px;
  margin-left: 30px;
  display: inline-flex;
  border-radius: 5px;
  font-size:14px;
  font-weight: 600;
  text-transform: uppercase;
  height: fit-content;
`

const Comments = styled.div`
  font-family: 'Poppins', sans-serif;
  color:black;
  background-color: white;
  height: 55px;
  width:auto;
  padding:0px 15px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: auto;
  display: inline-flex;
  border-radius: 5px;
  font-size:14px;
  font-weight: 600;
  text-transform: uppercase;
  height: fit-content;
`

const Title = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 47px;

`

const TopMeta = styled.div`
  display: flex;

`

const BottomMeta = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 45px;
`
