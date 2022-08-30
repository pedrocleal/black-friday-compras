import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid #e1e1e1;
  border-radius: 6px;
  background-color: hsla(0, 100%, 100%, 0.08);
	box-shadow:
		/* offset-x | offset-y | blur-radius | spread-radius | color */
		0px 3px 4px 0px hsla(0,0%,0%,0.14), 
		0px 3px 3px -2px hsla(0,0%,0%,0.12), 
		0px 1px 8px 0px hsla(0,0%,0%,0.2);

  img {
    max-width: 250px;
    max-height: 230px;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  h3 {
    color: #fff;
    margin: 12px 0;
    text-overflow: ellipsis;
    width: 300px;
  }

  span {
    color: ${({ theme }) => theme.textColor};

    strong {
      margin-top: 8px;
      display: block;
      font-size: 24px;
      color: ${({ theme }) => theme.primary};
    }
  }

  a {
    margin-top: 24px;
    width: 100%;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    background: ${({ theme }) => theme.secondary};
    border-radius: 4px;
  }
`