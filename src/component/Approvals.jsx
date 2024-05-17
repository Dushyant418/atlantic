import React from 'react'
import blue_liquid from '../assets/images/blue-liquid.png'
import blue_ellip from '../assets/images/ellipse-b.png'

const Approvals = () => {
  return (
      <section className=' bg-black -mt_1 position-relative'>
          <div className=' position-absolute box_white2'></div>
          <img className=' position-absolute blue_liquid_position' src={blue_liquid} alt="image-blue" />
          <img className=' position-absolute blue_ellip_position' src={blue_ellip} alt="blue_ellip" />

          <div className=' container max_width_1140 padding_bottom_64'>
              <div className=' d-flex align-items-center justify-content-start'>
                  <h3 className='text-uppercase text-white font_Poppins text-center font_weight_800 mb-0 font_size_2xl line_height_62 max_width_745'>OEM<em className=' fw-normal position-relative baground_blue z-1'> Approvals</em></h3>
              </div>
              <div className='row justify-content-start'>
                  <div className='col-6 z-2'>
                      <p className=' mb-0 font_DMsans fw-normal font_size_xl line_height_36 black2 max_width_567 padding_top_113 pb-2'>At Atlantic Grease and Lubricants, we have <span className=' fw-bold'>secured approvals</span> leading automobile manufacturers. Thus, we demonstrate our commitment to delivering the best possible outcomes to our customers.</p>
                      <p className=' mb-0 font_DMsans fw-normal font_size_xl line_height_36 black2 max_width_567  pb-5'>Recognising the <span className=' fw-bold'>significance of quality</span> to our valued customers, we uphold the utmost standards of excellence in all our endeavors.</p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Approvals