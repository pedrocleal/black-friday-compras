import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  padding: 24px;

  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(255, 255, 255, 0.125);

  border-radius: 24px;
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