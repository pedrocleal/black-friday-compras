import { Form } from "./styles";
import Input from "../../components/Input";
import { Link } from 'react-router-dom';

import { Container } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h4>Cadastro</h4>

        <Input 
          type='text'
          placeholder='Nome de usuário'
        />

        <Input 
          type='text'
          placeholder='Email'
        />

        <Input 
          type='password'
          placeholder='Senha'
        />

        <Input 
          type='password'
          placeholder='Repetir senha'
        />

        <button onClick={(e) => handleFormSubmit(e)}>Cadastrar</button>
      </Form>

      <p>Já possui conta? Faça o <Link to='/login'>login</Link></p>
    </Container>
  )
}