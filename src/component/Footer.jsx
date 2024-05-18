import React from 'react'
import Car from '../assets/images/car-image.png'

const Footer = () => {
    return (
        <section className=' bg-black -mt_1'>
            <div className=' container max_width_1140'>
                <div className=' d-flex align-items-center justify-content-center padding_bottom_70'>
                    <h3 className='text-uppercase text-white font_Poppins text-center font_weight_800 font_size_2xl line_height_62'>explore our<em className=' fw-normal position-relative baground_red2 z-1'> blogs</em></h3>
                </div>
                <div className='row padding_bottom_262'>
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center justify-content-lg-start'>
                        <div className='footer_card position-relative'>
                            <div className='box_red'>
                                <p className=' mb-0 font_DMsans text-white fw-normal font_size_xm line_height_21'>10-March-2024</p>
                            </div>
                            <img src={Car} className=' w-100' alt="car" />
                            <p className=' mb-0 font_DMsans text-white fw-medium font_size_lg line_height_23 padding_top_15 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>read more</button>

                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-4 pt-5 pt-md-0 d-flex justify-content-center'>
                        <div className='footer_card position-relative'>
                            <div className='box_red'>
                                <p className=' mb-0 font_DMsans text-white fw-normal font_size_xm line_height_21'>10-March-2024</p>
                            </div>
                            <img src={Car} className=' w-100' alt="car" />
                            <p className=' mb-0 font_DMsans text-white fw-medium font_size_lg line_height_23 padding_top_15 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>read more</button>

                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-4 pt-5 pt-lg-0 d-flex justify-content-center justify-content-lg-end'>
                        <div className='footer_card position-relative'>
                            <div className='box_red'>
                                <p className=' mb-0 font_DMsans text-white fw-normal font_size_xm line_height_21'>10-March-2024</p>
                            </div>
                            <img src={Car} className=' w-100' alt="car" />
                            <p className=' mb-0 font_DMsans text-white fw-medium font_size_lg line_height_23 padding_top_15 padding_bottom_27'>Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.</p>
                            <button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>read more</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer