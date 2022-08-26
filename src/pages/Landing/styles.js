import styled from "styled-components";

export const ActionsContainer = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-align: center;
    color: #d3d3d3;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 12px;
    height: 200px;
    width: 250px;
    padding: 52px;
    border-radius: 12px;
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    border-radius: 12px;
    border: 1px solid #fafafa;
    
    &:hover {
      background: #FBBF24;
      color: #1e1e1e;
    }
  }

  hr {
    width: 20px;
    transform: rotate(90deg)
  }
`