import { Container, Form } from './styles';
import Input from '../../components/Input';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {

  const [ input, setInput ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault();

    console.log({ input, password })
  }

  return (
    <Container>
      <Form>
        <h4>LOGIN</h4>
        
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Email'
        />

        <Input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Senha'
        />

        <button onClick={(e) => handleFormSubmit(e)}>Entrar</button>
      </Form>  

      <p>Não possui conta? <Link to='/sign-up'>Cadastre-se</Link></p>
    </Container>
  )
}