import styled from 'styled-components'

const ContainerStyled = styled.div`
  width:${(props)=>props.width};
  height:${(props)=>props.height};
  border-radius:${(props)=>props.radius};
  display:${(props)=>props.display};
  gap:${(props)=>props.gap};
  margin:auto;
  justify-content: center;
  justify-items: center;
  padding:${(props)=>props.padding};
  border:${(props)=>props.border};
  background-color: ${(props)=>props.bgColor};
  text-align: center;
  flex-wrap: ${(props)=>props.wrap};
  /* @media only screen and (min-width:900px) {
    font-size:1.5em;
  } */
  min-width:${(props)=>props.minwidth};
  max-width:${(props)=>props.maxwidth};
  font-size:${(props)=>props.fontsize};
`
export default ContainerStyled