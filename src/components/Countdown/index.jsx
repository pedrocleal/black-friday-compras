import { Container } from "./styles"

export function Countdown() {

  function getDaysUntilBlackFriday() {
    const blackFridayDate = new Date('Nov 25, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = blackFridayDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return days;
  }

  getDaysUntilBlackFriday();

  return (
    <Container>
      <span>Faltam <strong>{getDaysUntilBlackFriday()}</strong> dias para a black friday!</span>
    </Container>
  )
}