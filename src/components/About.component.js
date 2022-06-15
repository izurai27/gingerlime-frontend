import React from 'react'
import ContainerStyled from '../StyledComponents/Container.styled'

const About = () => {
  return (
    
    <ContainerStyled width="95%" display="grid" gap="20px">
      <div className='fs-400 uppercase'>About</div>
      <ContainerStyled width="70%">
      GingerLime is an online wallpaper, home decor and fabric marketplace featuring print-on-demand products sustainably printed with over 1,000,000 designs created by independent artists all over the world.
Artists receive royalties when their designs are purchased, so you can feel good that your order supports creatives.
Want to get in on the fun and express your creativity? Upload your own design for your next project or start your own Spoonflower store!
      </ContainerStyled>

    </ContainerStyled>
    
  )
}

export default About