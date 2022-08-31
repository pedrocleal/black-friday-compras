import styled from "styled-components";

export const Container = styled.div`
  margin: 172px auto;
  padding: 24px;

  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: ${({ theme }) => theme.background};
  /* border: 1px solid rgba(255, 255, 255, 0.125); */

  border-radius: 12px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`

export const Header = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;

  padding: 0 24px;

  h1 {
    font-weight: bold;
    font-size: 32px;
    color: #fff;
  }

  p {
    color: ${({ theme }) => theme.textColor};
  }

  .box {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`

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