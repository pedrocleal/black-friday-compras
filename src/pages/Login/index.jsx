import { useState, useContext } from 'react';
import { Container, Form } from './styles';
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { FormGroup } from '../../components/FormGroup'

import { AuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

export function Login() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const isButtonValid = email && password;

  const { isAuth, login } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [])

  function handleFormSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <h4>Login</h4>
        
        <FormGroup>
          <Input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='E-mail'
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

        <button 
          disabled={!isButtonValid} 
          onClick={(e) => handleFormSubmit(e)}
        >
            Entrar
          </button>
      </Form>  

      <p>Não possui conta? <Link to='/sign-up'>Cadastre-se</Link></p>
    </Container>
  )
}