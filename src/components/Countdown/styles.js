import styled from "styled-components";

export const Container = styled.div`
  margin-top: 52px;
  bottom: 10px;
  margin-bottom: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    margin-top: 8px;
    color: ${({ theme }) => theme.textColor};

    strong {
      color: ${({ theme }) => theme.secondary};
      font-weight: 900;
    }
  }
`