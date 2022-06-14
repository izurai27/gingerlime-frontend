import styled from 'styled-components'

const RoundContainerStyled = styled.div`
  width: ${(props)=>props.width};
  aspect-ratio: 1;
  border-radius:50%;
  overflow: hidden;
  max-width: ${(props)=>props.maxwidth}
`
export default RoundContainerStyled