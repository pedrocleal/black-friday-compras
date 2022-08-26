import styled from "styled-components";

export const Container = styled.div`
  p {
    margin-top: 16px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};

    a {
      color: ${({ theme }) => theme.secondary};
      font-weight: bold;
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;
  
  h4 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 16px;
    font-weight: 900;
  }

  button {
    width: 100%;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #30A451;
    background: #30A451;
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 16px;
    outline: none;
  }
`