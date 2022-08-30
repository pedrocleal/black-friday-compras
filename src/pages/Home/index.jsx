import { Product } from "../../components/Product"
import { Container, ContainerHeader, ListProducts } from "./styles"
import { SignOut } from 'phosphor-react'

const products = [
  {
    id: 1,
    name: 'Monitor Widescreen',
    price: 'R$ 1200,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 2,
    name: 'Placa mãePlaca mãePlaca mãe',
    price: 'R$ 800,00',
    link: 'https://pedroclealdev.netlify.app'
  }
  ,{
    id: 3,
    name: 'Ryzen 5 5600X',
    price: 'R$ 1200,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 4,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 4,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 4,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 4,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  }
]

export function Home() {
  
  const handleLogOut = () => {
    console.log('to saindo')
  }

  return (
    <Container>
      <ContainerHeader>
        <h2>Olá, pedrocleal!</h2>
        <SignOut 
          size={32} 
          weight={"bold"}
          color='#FF3E60' 
          className="log-out"
          onClick={handleLogOut}
        />
      </ContainerHeader>

      <h1>
        Meus produtos
      </h1>
      <ListProducts>
        {products.map((product) => (
          <Product 
            key={product.id}
            name={product.name}
            price={product.price}
            link={product.link}
          />
        ))}
      </ListProducts>

      <button className="add-product">Adicionar novo produto</button>
    </Container>
  )
}