import styled from "styled-components";

export const Container = styled.div`
  p {
    margin-top: 16px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};

    a {
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  flex-direction: column;
  
  h4 {
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 24px;
  }

  button {
    width: 100%;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #60FE00;
    background: #60FE00;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }
`