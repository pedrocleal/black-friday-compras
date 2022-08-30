import { useState, useContext } from 'react';
import { Container, Form } from './styles';
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { FormGroup } from '../../components/FormGroup'

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase/firebase-config';

import { AuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

export function Login() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const isButtonValid = username && password;

  const { isAuth, setIsAuth, currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [])

  async function login() {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );

      setCurrentUser(response.user)
      // localStorage.setItem('auth_token', currentUser.accessToken)
      setIsAuth(true);
      setTimeout(() => {
        navigate("/")
      }, 1000);
    } catch (error) {
      console.log(error)
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <h4>Login</h4>
        
        <FormGroup>
          <Input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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