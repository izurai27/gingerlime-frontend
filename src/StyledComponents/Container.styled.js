import styled from 'styled-components'

const ContainerStyled = styled.div`
  width:${(props)=>props.width};
  
  display:${(props)=>props.display};
  gap:${(props)=>props.gap};
  margin:auto;
  justify-content: center;
  padding:${(props)=>props.padding};
  border:${(props)=>props.border};
  font-size:var(--fs-400);

  @media only screen and (min-width:900px) {
    font-size:var(--fs-500);
  }
`
export default ContainerStyled