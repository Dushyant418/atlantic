import React from 'react'
import gold_liquid from '../assets/images/gold-liquid.png'
import gold_ellipse from '../assets/images/gold-ellipse.png'

const Lubricant = () => {
    return (
        <section className=' bg-black -mt_1 position-relative'>
            <div className=' position-absolute box_white'></div>
            <img className=' gold_position position-absolute d-none d-lg-block' src={gold_liquid} alt="golde-liquid" />
            <img className=' position-absolute ellipse_gold d-none d-lg-block' src={gold_ellipse} alt="ellipse" />

            <div className=' container max_width_1140'>
                <div className=' d-flex align-items-center justify-content-end padding_top_heading'>
                    <h3 className='text-uppercase text-white font_Poppins text-start font_weight_800 pb-4 pb-md-0 mb-0 font_size_2xl line_height_62 max_width_745'>Pioneers of
                        <em className=' fw-normal position-relative baground_red3 z-1'> Lubricants</em> <span className=' d-inline-block'>& Grease Manufacturing</span> </h3>
                </div>
                <div className='row justify-content-center justify-content-lg-end padding_bottom_210'>
                    <div className='col-12 col-lg-6 z-2 d-flex flex-column justify-content-end align-items-end'>
                        <p className=' mb-0 font_DMsans fw-normal font_size_xl line_height_36 black2 max_width_556 padding_top_white_box pb-5'>Atlantic Grease & Lubricants is one of the leading manufacturers in the  <span className=' fw-bold'>automotive industry </span> providing high-performance products certified by renowned European and American automobile industries.</p>
                        <div className='mb-0'><button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>read our story</button></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lubricant