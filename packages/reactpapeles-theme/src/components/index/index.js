import React, {useEffect} from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"
import Link from "@frontity/components/link"
import DestacadoTop from "./destacadoTop"
import DestacadoTopLoading from "./destacadoTopLoading"

const IndexBody = ({state, actions}) => {
  useEffect(()=>{
    actions.source.fetch("/tag/destacado")
  }, []);
  const data = state.source.get("/tag/destacado")
  return (
    <>
    <Switch>
      <DestacadoTop when={data.isReady}/>
      <DestacadoTopLoading when={!data.isReady}/>
    </Switch>
    </>
  )
  /*
  return (
    data.isReady &&
    <>
      <DestacadoTop isReady={data.isReady} bgImg={state.source[data.items[0].type][data.items[0].id].jetpack_featured_media_url}>

      <DestacadoMidList>

      </DestacadoMidList>
      <DestaList isReady={data.isReady}>
        {data.isReady && data.items.map((item) => {
          const post = state.source[item.type][item.id]
          return (
            <Link key={item.id} link={post.link}>
              {post.title.rendered}
              <br/>
            </Link>
          )
        })}
      </DestaList>
    </>
  )
  */
}

export default connect(IndexBody)

const DestaList = styled.div`
  height: 300px;
  background-color: ${(props) => (props.isReady ? "lightseagreen" : "maroon")};
`

const DestacadoMidList = styled.div`
  height: 380px;
`
