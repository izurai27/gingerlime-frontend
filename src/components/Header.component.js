import React from 'react'
import LogoStyled from '../StyledComponents/LogoStyled'
import HeaderStyled from '../StyledComponents/Header.styled'
import Logo from '../images/logofb.png'

const Header = () => {
  return (
    <HeaderStyled>
      
      <LogoStyled>
        <img src={Logo} alt="gingerlime-logo" />
      </LogoStyled>
              
      {/* <div>
        <form action="">
          <input type="text" placeholder='Search' />
          <button>search</button>
        </form>
      </div> */}
    </HeaderStyled>
  )
}

export default Header