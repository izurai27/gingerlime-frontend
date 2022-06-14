import React from 'react'
import ButtonStyled from '../StyledComponents/Button.styled'
import WhatsNewStyled from '../StyledComponents/WhatsNew.styled'
import WhatsnewMsgStyled from '../StyledComponents/WhatsnewMsg.styled'
 

const WhatsNew = () => {
  return (
    <WhatsNewStyled>
      {/* <div className='container grid box' style={{"--width" :"50%", "textAlign":"center"}}> */}
        <WhatsnewMsgStyled>
          <div className='fs-600'>Lets create your cute peanuts character </div>
           <ButtonStyled>
            Get It Now
           </ButtonStyled>
           
        </WhatsnewMsgStyled>
        

      {/* </div> */}
    </WhatsNewStyled>
  )
}

export default WhatsNew