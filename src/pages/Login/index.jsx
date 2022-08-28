import { useState } from 'react';
import { Container, Form } from './styles';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import { FormGroup } from '../../components/FormGroup'

import { createUserWithEmailAndPassword } from "firebase/auth"

export function Login() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function login(e) {
    e.preventDefault();

    console.log({ username, password })
  }

  return (
    <Container>
      <Form>
        <h4>Login</h4>
        
        <FormGroup>
          <Input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Email'
          />
        </FormGroup>

        <FormGroup>
          <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Senha'
          />
        </FormGroup>

        <button onClick={(e) => handleFormSubmit(e)}>Entrar</button>
      </Form>  

      <p>Não possui conta? <Link to='/sign-up'>Cadastre-se</Link></p>
    </Container>
  )
}