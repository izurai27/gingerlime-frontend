import React from 'react'
import ContainerStyled from '../StyledComponents/Container.styled'
import RoundContainerStyled from '../StyledComponents/RoundContainer.styled'


const GLintro = () => {
  return (
    <ContainerStyled width="95%"  display="grid" gap="20px" padding="20px" border="1px solid  hsl(var(--clr-light))">
      <ContainerStyled width="fit-content" display="flex" gap="20px">
        <RoundContainerStyled width="20vw" maxwidth="100px" >
          <img style={{"width":"100%", "height":"100%"}} src="https://scontent.fcgk11-1.fna.fbcdn.net/v/t1.6435-9/109939387_2609982575982004_2991628643924282322_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeH19ZPrPVfbsS-g6O-YkfFazcbcbaI7hurNxtxtojuG6pGLu-sARIiiJh0EPxqCTlM&_nc_ohc=hRjd0iMQFgEAX_xkd2H&_nc_ht=scontent.fcgk11-1.fna&oh=00_AT_ObDJFvG8nq3KtrPZ956vSbB6ULcysZeyxdcSRQXY8sw&oe=62CC0489" alt="" />
        </RoundContainerStyled>
        <RoundContainerStyled width="20vw " maxwidth="100px">
          <img style={{"width":"100%", "height":"100%"}} src="https://scontent.fcgk11-1.fna.fbcdn.net/v/t1.6435-9/106102832_2591826741130921_3889526219245563591_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFq7rgor02jLg5oQkAVd-rPDKB0rQCsOnQMoHStAKw6dBfSODEr2a7mBwmeJNVUFHU&_nc_ohc=NKeTXMNnm6sAX-V-pDC&_nc_ht=scontent.fcgk11-1.fna&oh=00_AT_J5hdjPbATsy_weWsGkhCq1aUzlnoxqyGwSDqDaUJ_mg&oe=62CF3BEC" alt="" />
        </RoundContainerStyled>
        <RoundContainerStyled width="20vw" maxwidth="100px">
          <img style={{"width":"100%", "height":"100%"}} src="https://scontent.fcgk11-1.fna.fbcdn.net/v/t39.30808-6/272659697_3050935581886699_4879606394989011826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGMXnpwa9SCa5yUrrx-mAZCwRt0dDeNdqnBG3R0N412qQ70xjXjP8VygcQzREMNK-s&_nc_ohc=b8qFHbZLoeEAX9bOzIU&_nc_zt=23&_nc_ht=scontent.fcgk11-1.fna&oh=00_AT_niyMoRmrGG8FifvVR11C9QEInv4T0VXZ4ihPY5FDSaQ&oe=62AD1B4D" alt="" />
        </RoundContainerStyled>
      </ContainerStyled>
      
      <div className='container  text-center' style={{"width":"70vw"}}>Ginger Lime is the premier online destination for print-on-demand wallpaper, home decor and fabric designed by independent artists.</div>

    </ContainerStyled>
  )
}

export default GLintro