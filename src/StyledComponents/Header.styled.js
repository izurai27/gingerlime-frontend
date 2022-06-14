import styled from 'styled-components'
import headerBg from '../images/banner-bg.png'


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items:center; */
  height:fit-content;
  background-color:#f7f7f7;
  padding-inline:30px;
  background-image: url(${headerBg});
  background-position: bottom;
  background-size: contain;
  background-repeat: repeat-x;
`

export default HeaderStyled