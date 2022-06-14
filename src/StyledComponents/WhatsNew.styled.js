import styled from 'styled-components'


const WhatsNewStyled = styled.div`
  background-image: url(${prop => prop.bgImg}) ;
  width:95%;
  height: 110vh;
  background-size:cover;
  background-position: center;
  display:flex;
  align-items: flex-end;
  margin: auto;
  border-radius: 5px;
  padding:10px;

  @media (min-width: 560px){
    background-image: url(${prop => prop.bgdesktop});
    height: 100vh;
  }
`

export default WhatsNewStyled