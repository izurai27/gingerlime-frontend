import React from 'react'
import WhatsNewStyled from '../StyledComponents/WhatsNew.styled'
import WhatsnewMsgStyled from '../StyledComponents/WhatsnewMsg.styled'
 

const WhatsNew = () => {
  return (
    <WhatsNewStyled>
      {/* <div className='container grid box' style={{"--width" :"50%", "textAlign":"center"}}> */}
        <WhatsnewMsgStyled>
          <div className='fs-600'>Lets create your cute peanuts character </div>
           <button>Get It Now</button>
        </WhatsnewMsgStyled>
        

      {/* </div> */}
    </WhatsNewStyled>
  )
}

export default WhatsNew