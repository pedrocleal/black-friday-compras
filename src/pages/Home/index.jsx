import { useEffect, useContext } from "react"
import { Product } from "../../components/Product"
import { Container, ContainerHeader, ListProducts } from "./styles"
import { SignOut } from 'phosphor-react'
import { doc,collection, getDocs } from 'firebase/firestore'

import { db } from '../../firebase/firebase-config'
import { AuthContext } from "../../contexts/AuthContext"

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
    id: 5,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 6,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  },
  {
    id: 7,
    name: 'Memória RAM 16gb',
    price: 'R$ 400,00',
    link: 'https://pedroclealdev.netlify.app'
  }
]

export function Home() {
  // const [username, setUsername] = useState('')

  const { loggedId, currentUser ,setCurrentUser } = useContext(AuthContext)
  const userCollectionRef = collection(db, "users");

  const handleLogOut = () => {
    console.log('to saindo')
  }

  useEffect(() => {
    async function getLoggedUser() {
      try {
        const response = await getDocs(userCollectionRef);
        const docs = response.docChanges();
        const usersList = []
        for (let i = 0; i < docs.length; i++) {
          const userData = response._snapshot.docChanges[i].doc.data.value.mapValue.fields;
          usersList.push(userData);
        }
        setCurrentUser(usersList.find((user) => user.uid.stringValue === loggedId))
      } catch (error) {
        console.log(error)
      }
    }

    getLoggedUser();
  }, [])

  return (
    <Container>
      <ContainerHeader>
        <h2>Olá, <strong>{currentUser?.username.stringValue}</strong>!</h2>
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