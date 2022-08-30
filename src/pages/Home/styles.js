import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  margin: 72px auto;
  padding: 24px;

  border: 1px solid ${({ theme }) => theme.textColor};
  border-radius: 12px;

  h1 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 24px;
  }

  .add-product {
    margin-top: 32px;
    background: #30A451;
    padding: 12px;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    border-radius: 4px;
    color: #fff;
  }
`

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;  
  margin-bottom: 24px;

  h2 {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }

  .log-out {
    cursor: pointer;
  }
`

export const ListProducts = styled.div`
  overflow-x: scroll;
  width: 100%;
  
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 12px;
  gap: 24px;

  ::-webkit-scrollbar {
    height: 8px;
    border-radius: 24px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textColor};
    border-radius: 24px;
  }
 
`