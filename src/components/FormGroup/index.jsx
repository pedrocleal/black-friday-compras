import { Container } from './styles'

export function FormGroup({ children, error }) {
  return (
    <Container>
      {children}
      {error && <span>{error}</span>}
    </Container>
  )  
}