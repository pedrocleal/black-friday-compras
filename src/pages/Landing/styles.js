import styled from "styled-components";

export const Container = styled.div`
  margin: 52px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-weight: bold;
  }

  p {
    font-size: 18px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 125px;

  a {
    background: #ddd;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;
    height: 200px;
    padding: 52px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.05)
    }
  }

  hr {
    width: 150px;
    transform: rotate(90deg)
  }
`