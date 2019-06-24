'use strict'

import React from 'react'
import styled from 'styled-components'

import { headerHeight } from 'util/constants'

const MainHeader = () => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton>Cadastrar Video</RegisterButton>
  </Header>
)

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

export default MainHeader
