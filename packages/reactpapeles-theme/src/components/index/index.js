import React, {useEffect} from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const IndexBody = ({state, actions}) => {
  useEffect(()=>{
    actions.source.fetch("/tag/destacado")
  }, []);
  const data = state.source.get("/tag/destacado")
  return (
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
  )
}

export default connect(IndexBody)

const DestaList = styled.div`
  height: 300px;
  background-color: ${(props) => (props.isReady ? "lightseagreen" : "maroon")};
`
