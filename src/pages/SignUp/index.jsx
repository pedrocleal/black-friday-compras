import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Form, Container } from './styles';

import Input from '../../components/Input';
import { FormGroup } from '../../components/FormGroup';

import useErrors from '../../hooks/useErrors';
import { errorHandler } from '../../errors/errorHandler';
import toast, { Toaster } from 'react-hot-toast';

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../../firebase/firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { AuthContext } from '../../contexts/AuthContext';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();
  
  const isButtonValid = errors.length === 0 && username && email && password && confirmPassword;

  const { isAuth, currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [])
  
  function handleUsernameInputChange(e) {
    setUsername(e.target.value);
    if (!e.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailInputChange(e) {
    setEmail(e.target.value);
    if (!e.target.value) {
      setError({ field: 'email', message: 'Email é obrigatório' });
    } else {
      removeError('email');
    }
  }

  async function createNewUser(uid) {
    try {
      const request = await addDoc(userCollectionRef, {
        uid: uid,
        username: username,
        email: email,
        password: password,
      })

      console.log(request)
    } catch(error) {
      console.log(error.response.data.message)
    }
  }

  async function signUp() {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // console.log(user.user.uid);
      await createNewUser(data.user.uid);
      console.log(response);
      toast.success('Cadastro efetuado com sucesso!');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.log(error)
      toast.error(errorHandler(error.code))
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    // form validation
    if (password !== confirmPassword) {
      return toast.error('As senhas não coincidem!')
    }

    if (password.length < 6) {
      return toast.error('A sua senha precisa ter no mínimo 6 caracteres')
    }

    signUp();
  }

  return (
    <Container>

      <Toaster styles={{
        background: '#051E34',
      }}/>

      <Form onSubmit={handleFormSubmit}>
        <h4>Cadastro</h4>

        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            onChange={(e) => handleUsernameInputChange(e)}
            type="text"
            placeholder="Nome de usuário"
            value={username}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            onChange={(e) => handleEmailInputChange(e)}
            type="text"
            placeholder="Email"
            value={email}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            placeholder="Repetir senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>

        <button
          type="submit"
          disabled={isButtonValid ? false : true}
        >
          Cadastrar
        </button>
      </Form>

      <p>
        Já possui conta? Faça o
        {' '}
        <Link to="/login">login</Link>
      </p>
    </Container>
  );
}
