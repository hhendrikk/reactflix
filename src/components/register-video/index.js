'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addVideo } from 'reducers/videos/action-creators'
import { onCloseRegisterFormVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterFormVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar vídeo</h2>
    <label htmlFor='id'>ID do vídeo:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Título do vídeo:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
    <ButtonClose type='button' onClick={onCloseRegisterFormVideo}>&times;</ButtonClose>
  </Form>
)

const mapsDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: { value: id },
      title: { value: title }
    } = e.target

    await dispatch(addVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },
  onCloseRegisterFormVideo: () => dispatch(onCloseRegisterFormVideo())
})

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  height: 30px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  line-height: 1;
  border-radius: 50%;
  font-size: 20px;
`

export default connect(null, mapsDispatchToProps)(RegisterVideo)
