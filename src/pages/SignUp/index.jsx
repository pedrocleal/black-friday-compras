import { Form } from "./styles";
import Input from "../../components/Input";
import { Link } from 'react-router-dom';
import { Container } from './styles'
import { FormGroup } from '../../components/FormGroup'
import { useState } from "react";
import useErrors from "../../hooks/useErrors";

export function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors(); 

  function handleUsernameInputChange(e) {
    if (!e.target.value) {
      return setError({ field: 'name', message: 'Nome é obrigatório'})
    }
    removeError('name')
    setUsername(e.target.value)
  }

  function handleEmailInputChange(e) {
    if (!e.target.value) {
      console.log('Email é obrigatório')
    }

    setEmail(e.target.value)
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleFormSubmit(e)}>
        <h4>Cadastro</h4>

        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            onChange={(e) => handleUsernameInputChange(e)} 
            type='text'
            placeholder='Nome de usuário'
          />
        </FormGroup>

        <FormGroup>
          <Input
            onChange={(e) => handleEmailInputChange(e)} 
            type='text'
            placeholder='Email'
          />
        </FormGroup>

        <FormGroup>
          <Input 
            type='password'
            placeholder='Senha'
          />
        </FormGroup>

        <FormGroup>
          <Input 
            type='password'
            placeholder='Repetir senha'
          />
        </FormGroup>

        <button 
          type="submit"
        >
          Cadastrar
        </button>
      </Form>

      <p>Já possui conta? Faça o <Link to='/login'>login</Link></p>
    </Container>
  )
}