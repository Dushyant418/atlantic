import React from 'react'
import Logo from '../assets/images/logo.svg'

const HeroSection = () => {
  return (
    <section className='hero_baground min-vh-100 position-relative d-flex flex-column'>
      <div className='nav_baground'>
        <div className='container max_width_1360'>
          <nav className='nav_padding d-flex align-items-center flex-wrap justify-content-between'>
            <div className=' d-flex align-items-center gap_55'>
              <img src={Logo} alt="logo" />
              <ul className=' d-flex flex-wrap gap_28 ps-0 mb-0'>
                <li><a href="#" className='off_white font_DMsans fw-normal font_size_sm line_height_24 link_hover'>About Us</a></li>
                <div class="dropdown">
                  <button class="dropbtn off_white font_DMsans fw-normal font_size_sm line_height_24">Categories <span><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M1 1L5.5 6L10 1" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                  </span> </button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <li><a href="#" className='off_white font_DMsans fw-normal font_size_sm line_height_24 link_hover'>Services</a></li>
                <li><a href="#" className='off_white font_DMsans fw-normal font_size_sm line_height_24 link_hover'>Testimonials</a></li>
                <li><a href="#" className='off_white font_DMsans fw-normal font_size_sm line_height_24 link_hover'>Blogs</a></li>
              </ul>
            </div>
            <div className=' d-flex align-items-center gap_16'>
              <div className='btn_box d-flex align-items-center gap_12'>
                <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.3833 12.877C7.76953 12.877 9.04785 12.4287 10.0938 11.6816L14.0283 15.6162C14.2109 15.7988 14.4517 15.8901 14.709 15.8901C15.2485 15.8901 15.6304 15.4751 15.6304 14.9438C15.6304 14.6948 15.5474 14.4541 15.3647 14.2798L11.4551 10.3618C12.2769 9.28271 12.7666 7.94629 12.7666 6.49365C12.7666 2.98242 9.89453 0.110352 6.3833 0.110352C2.88037 0.110352 0 2.97412 0 6.49365C0 10.0049 2.87207 12.877 6.3833 12.877ZM6.3833 11.499C3.64404 11.499 1.37793 9.23291 1.37793 6.49365C1.37793 3.75439 3.64404 1.48828 6.3833 1.48828C9.12256 1.48828 11.3887 3.75439 11.3887 6.49365C11.3887 9.23291 9.12256 11.499 6.3833 11.499Z" fill="white" fill-opacity="0.6" />
                </svg>
                </span>
                <input className='nav_input font_DMsans fw-normal font_size_md line_height_22 off_white' type="search" placeholder='Search' />
              </div>
              <button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>Get in touch</button>
            </div>
          </nav>
        </div>
      </div>
      <div className='container max_width_1140 d-flex flex-grow-1'>
        <div className=' d-flex align-items-end  justify-content-between padding_bottom_45  w-100'>
          <h2 className='mb-0 font_Poppins font_weight_800 text-white text-uppercase font_size_3xl line_height_72 max_width_800'>Optimising your
            Vehicle <em className=' fw-normal'>Performance</em></h2>
          <button className=' text-uppercase nav_btn font_Chivo font_weight_900 font_size_sm line_height_24'>explore</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection