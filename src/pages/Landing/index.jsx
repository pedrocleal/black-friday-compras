import { Link } from 'react-router-dom'
import { ActionsContainer } from './styles'

export function Landing() {
  return (
    <ActionsContainer>
      <Link to='/login'>Já tenho uma conta!</Link>
      <hr />
      <Link to='/sign-up'>Quero me cadastrar!</Link>
    </ActionsContainer>
  )
}