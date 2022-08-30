import { Container } from "./styles";

import productDefault from '../../assets/product-default.png' 

export function Product({ name, price, link }) {
  return (
    <Container>
      <img src={productDefault} alt='Product image' />

      <h3>{name}</h3>
      <span>Preço no dia que foi adicionado:
        <strong>{price}</strong>
      </span>
      <a href={link} target='_blank'>Acessar link</a>
    </Container>
  )
}