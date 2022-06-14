import React from 'react'
import ButtonStyled from '../StyledComponents/Button.styled'
import WhatsNewStyled from '../StyledComponents/WhatsNew.styled'
import WhatsnewMsgStyled from '../StyledComponents/WhatsnewMsg.styled'

const imgbg1 ='https://scontent.fcgk11-1.fna.fbcdn.net/v/t39.30808-6/286109205_3150394401940816_6201148549612003450_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGBAgMoFK0WfxAuzY-OiZiZHB1DWbxXINUcHUNZvFcg1QXCUzeVajDKp2liu-o8y20&_nc_ohc=dj22MOeemaYAX8heLY5&_nc_zt=23&_nc_ht=scontent.fcgk11-1.fna&oh=00_AT-LTNC4reu5wIo0_vol4MXxU67M79siTggC-JmVH1WevQ&oe=62ACA7E1'
const imgbg2 = 'https://scontent.fcgk11-1.fna.fbcdn.net/v/t39.30808-6/286109205_3150394401940816_6201148549612003450_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGBAgMoFK0WfxAuzY-OiZiZHB1DWbxXINUcHUNZvFcg1QXCUzeVajDKp2liu-o8y20&_nc_ohc=dj22MOeemaYAX8heLY5&_nc_zt=23&_nc_ht=scontent.fcgk11-1.fna&oh=00_AT-LTNC4reu5wIo0_vol4MXxU67M79siTggC-JmVH1WevQ&oe=62ACA7E1'

const WhatsNew = () => {
  return (
    <WhatsNewStyled bgImg={imgbg1} bgdesktop={imgbg2}>
      \
        <WhatsnewMsgStyled>
          <div className='fs-400'>Lets create your cute peanuts character </div>
           <ButtonStyled>
            Get It Now
           </ButtonStyled>
           
        </WhatsnewMsgStyled>
        

      {/* </div> */}
    </WhatsNewStyled>
  )
}

export default WhatsNew