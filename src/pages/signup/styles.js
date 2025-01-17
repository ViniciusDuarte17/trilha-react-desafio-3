import styled from 'styled-components';


export const SignupContainer = styled.main`
    width: 100%;
    max-width: 80%;
    margin: auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 400px;
`

export const Column = styled.div`
     flex: 1vh;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
`

export const SubtitleLogin = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 25px;
   margin: 20px 0;

   color: #FFFFFF;

   button {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #23DD7A;
    background: none;
    border: none;
   }
`