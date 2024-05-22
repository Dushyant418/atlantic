import React from 'react'
import Volkswagen from '../assets/images/volkswagen.png'
import Volkswagen2 from '../assets/images/volkswagen-2.png'
import Mini from '../assets/images/Mini.png'
import caterpillar from '../assets/images/caterpillar.png'
import mercedes from '../assets/images/mercedes.png'
import Mini2 from '../assets/images/Mini2.png'
import blue_ellipse from '../assets/images/blue-ellipse.png'
import red_ellipse from '../assets/images/Ellipse-red.png'



const Numbers = () => {
    return (
        <section id='testimonials' className=' position-relative bg-black -mt_1'>
            <img className='position-absolute red_ellipse' src={red_ellipse} alt="ellpipse" />
            <div className="padding_top_200">
                <img className='position-absolute blue_ellipse d-none d-lg-block' src={blue_ellipse} alt="blue-ellipse" />
                <div className='circle_baground w-100  d-flex  z-1 position-relative d-none d-lg-block'>
                    <img className=' position-absolute volkswagen_position scroll_image' src={Volkswagen} alt="volkswagen" />
                    <img className=' position-absolute volkswagen_position2 scroll_image' src={Volkswagen2} alt="volkswagen2" />
                    <img className=' position-absolute mini_position1 scroll_image' src={Mini} alt="mini" />
                    <img className=' position-absolute caterpillar_position scroll_image' src={caterpillar} alt="caterpillar" />
                    <img className=' position-absolute mercedes_position scroll_image' src={mercedes} alt="mercedes" />
                    <img className=' position-absolute mini_position2 scroll_image' src={Mini2} alt="mini2" />
                    <img className=' position-absolute volkswagen2_position scroll_image' src={Volkswagen} alt="volkswagen" />
                </div>
                <div className=' over_sc roll gap-4 d-flex flex-wrap justify-content-center  z-1  d-lg-none d-block pt-5 padding_bottom_260'>
                    <img className='  volkswagen_position scroll_image d-none d-sm-block' src={Volkswagen} alt="volkswagen" />
                    <img className='  volkswagen_position2 scroll_image' src={Volkswagen2} alt="volkswagen2" />
                    <img className='  mini_position1 scroll_image' src={Mini} alt="mini" />
                    <img className='  caterpillar_position scroll_image' src={caterpillar} alt="caterpillar" />
                    <img className='  mercedes_position scroll_image' src={mercedes} alt="mercedes" />
                    <img className='  mini_position2 scroll_image' src={Mini2} alt="mini2" />
                    <img className='  volkswagen2_position scroll_image' src={Volkswagen} alt="volkswagen" />
                </div>
                <div className='box_baground margin_top_160'>
                    <div className=' container max_width_1140'>
                        <div className=' d-flex align-items-center justify-content-center padding_bottom_68'>
                            <h3 className=' z-3 text-uppercase text-white font_Poppins text-center font_weight_800 font_size_2xl line_height_62 max_width_578'>our <em className=' fw-normal position-relative baground_red z-1'>numbers</em> say about us</h3>
                        </div>
                        <div className='row padding_bottom_288'>
                            <div className='col-12 col-sm-6 col-lg-3 z-3'>
                                <h3 className='font_Poppins font_weight_800 font_size_4xl line_height_96 mb-0 text-center red_hover'>20k+</h3>
                                <p className='mb-0 text-white font_DMsans fw-medium font_size_sm line_height_24 text-center'>Happy customers</p>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3 z-3 pt-4 pt-sm-0'>
                                <h3 className='font_Poppins font_weight_800 font_size_4xl line_height_96 mb-0 text-center red_hover'>35%</h3>
                                <p className='mb-0 text-white font_DMsans fw-medium font_size_sm line_height_24 text-center'>Export Volume</p>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3 z-3 pt-4 pt-lg-0'>
                                <h3 className='font_Poppins font_weight_800 font_size_4xl line_height_96 mb-0 text-center red_hover'>20%</h3>
                                <p className='mb-0 text-white font_DMsans fw-medium font_size_sm line_height_24 text-center'>Market Share</p>
                            </div>
                            <div className='col-12 col-sm-6 col-lg-3 z-3 pt-4 pt-lg-0'>
                                <h3 className='font_Poppins font_weight_800 font_size_4xl line_height_96 mb-0 text-center red_hover'>65+</h3>
                                <p className='mb-0 text-white font_DMsans fw-medium font_size_sm line_height_24 text-center'>Country</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Numbers