'use strict'

import React from 'react'
import styled from 'styled-components'

import { footerHeight } from 'util/constants'

const FooterMain = () => (
  <Footer>
    &copy; 2018
  </Footer>
)

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
  color: #fff;
`

export default FooterMain
