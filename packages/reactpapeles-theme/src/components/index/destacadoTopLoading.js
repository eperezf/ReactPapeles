import React, {useEffect} from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"

const DestacadoTopLoading = ({state, actions}) => {
  return (
    <DestacadoTopContainer>
      <MetaOverlay>
        <TopMeta>
          <Category></Category>
          <Comments></Comments>
        </TopMeta>
        <BottomMeta>
          <Title></Title>
        </BottomMeta>

      </MetaOverlay>
    </DestacadoTopContainer>
  )
}

export default connect(DestacadoTopLoading)


const DestacadoTopContainer = styled.div`
  width: auto;
  max-width:1170px;
  height: 585px;
  margin-left: auto;
  margin-right: auto;
  background-color: #141414;
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

const MetaOverlay = styled.div`
  color:white;
  text-decoration: none;
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
  width: 60px;
  height: 21px;
  background-color: #ffffff33;
  padding:0px 15px;
  margin-top: 30px;
  margin-left: 30px;
  display: inline-flex;
  border-radius: 5px;
  font-size:14px;
  font-weight: 600;
  text-transform: uppercase;
`

const Comments = styled.div`
  font-family: 'Poppins', sans-serif;
  color:black;
  background-color: #ffffff33;
  height: 30px;
  width:115px;
  padding:0px 15px;
  margin-top: 30px;
  margin-right: 30px;
  margin-left: auto;
  display: inline-flex;
  border-radius: 5px;
  font-size:14px;
  font-weight: 600;
  text-transform: uppercase;
`

const Title = styled.div`
  display: flex;
  width:100%;
  background-color: #ffffff33;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 47px;
  height: 120px;
  border-radius:20px;

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
