import styled from "styled-components";

export const ActionsContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-align: center;
    background: #ddd;
    color: #000;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;
    height: 200px;
    width: 200px;
    padding: 52px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      transform: scale(1.05)
    }
  }

  hr {
    width: 20px;
    transform: rotate(90deg)
  }
`