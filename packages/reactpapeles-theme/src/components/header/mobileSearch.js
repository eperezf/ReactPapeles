import React from "react"
import {connect, styled} from "frontity"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileSearch = ({state, actions}) => {
  return (
    <>
      <SearchModal>
        <CloseIcon icon={faTimes} onClick={actions.theme.toggleMobileSearch}/>
        <SearchInput type="search" placeholder="BUSCAR"/>
      </SearchModal>
    </>
  )
}

const SearchModal = styled.div`
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  flex: 1;
  justify-content:center;
  align-items:center;
  position:fixed;
  z-index:110;
  background-color: #141414f4;
  backdrop-filter:blur(4px);
  color: white;
  display: flex;
`
export default connect(MobileSearch)

const SearchInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius:10px;
  background-color:#141414;
  font-size:16px;
  color:white;
`

const CloseIcon = styled(FontAwesomeIcon)`
  font-size:45px;
  position:absolute;
  top: 30px;
  right: 30px;
`
