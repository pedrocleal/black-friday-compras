import { Link } from 'react-router-dom'
import { Container, ActionsContainer } from './styles'

export function Landing() {
  return (
    <Container>
      <h1>O que você vai comprar na Black Friday?</h1>
      <p>Adicione os produtos que você pretende comprar
        e seja notificado quando a black friday chegar!
      </p>

      <ActionsContainer>
        <Link to='/login'>Já tenho uma conta!</Link>
        <hr />
        <Link to='/sign-up'>Quero me cadastrar!</Link>
      </ActionsContainer>
    </Container>
  )
}