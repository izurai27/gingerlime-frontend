import React from 'react'
import inspiringUsData from '../data/inspiringUsData'
import ContainerStyled from '../StyledComponents/Container.styled'
import RoundContainerStyled from '../StyledComponents/RoundContainer.styled'
import Gap from '../StyledComponents/Gap'
import PlainLinkStyled from '../StyledComponents/PlainLink.styled'

const InspiringUs = () => {
  return (
    <div>
      <div className='text-center uppercase fs-400'>Inspiring Us</div>
      <Gap height="20px"/>
      <ContainerStyled display="flex" gap="30px" wrap="wrap">
        {inspiringUsData.map(el => {
          return(
          <ContainerStyled  display="flex"   wrap="wrap" maxwidth="fit-content"> 
            <ContainerStyled width="300px" height="300px" radius="10px 0 0 0">
              <img style={{width:"100%", height:"100%"}} src= {el.image} alt="craft" />
            </ContainerStyled> 
            <ContainerStyled  display="grid" gap="10px" bgColor={el.bgColor} padding="20px" width="300px" height="300px" radius="0 0 10px 0" >
              <RoundContainerStyled width="60px">
                <img src={el.crafterPhoto} alt="" />
              </RoundContainerStyled>
              
              <div className='fs-200'>{el.caption}</div>
              <ContainerStyled display="flex" >
                <PlainLinkStyled>
                <a className='fs-100' href={el.postLink}>View Post</a>
              </PlainLinkStyled>
              <PlainLinkStyled>
                <a className='fs-100' href={el.productLink}>Shop</a>
              </PlainLinkStyled>
              </ContainerStyled>
              
              

            </ContainerStyled> 
          </ContainerStyled> 

          )
          
      })}
      </ContainerStyled>
    </div>
  )
}

export default InspiringUs