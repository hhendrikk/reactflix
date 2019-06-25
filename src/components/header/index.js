'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { onOpenRegisterFormVideo } from 'reducers/ui/action-creators'
import { headerHeight } from 'util/constants'

const MainHeader = ({ onClickRegisterButton }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onClickRegisterButton}>Cadastrar Video</RegisterButton>
  </Header>
)

const mapsDispatchToProps = (dispatch) => ({
  onClickRegisterButton: () => dispatch(onOpenRegisterFormVideo())
})

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: #fff;
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0
`

export default connect(null, mapsDispatchToProps)(MainHeader)
