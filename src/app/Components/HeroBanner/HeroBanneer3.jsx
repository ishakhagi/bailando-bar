"use client"
import Slider from "react-slick";
import parse from 'html-react-parser';
import { useRef } from "react";
import Image from "next/image";

const HeroBanneer3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    
    const previous = () => {
        sliderRef.current.slickPrev();
    }; 

    const heroContent = [
        {img:'/assets/img/shape/bannerShape3_3.png', subtitle:'signature', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},
        {img:'/assets/img/shape/bannerShape3_3.png', subtitle:'signature', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},
        {img:'/assets/img/shape/bannerShape3_3.png', subtitle:'signature', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},

      ]; 

    return (
<section className="banner-section fix">
        <div className="slider-area">
            <div className="swiper banner3-slider">
                <div className="swiper-wrapper">
                <Slider ref={sliderRef} {...settings}>
                {heroContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="banner-wrapper style3 bg-img">
                            <div className="shape1  d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay=".3s">
                                    <Image className="float-bob-y" src="/assets/img/shape/bannerShape3_1.svg" alt="img" width={191} height={146}   />
                                
                            </div>
                            <div className="shape2  d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay=".5s">
                                    <Image className="float-bob-x" src="/assets/img/shape/bannerShape3_2.svg" alt="img" width={304} height={218}   />
                                
                            </div>
                            <div className="shape3" data-tilt-max="4"
                                data-animation="slideInLeft" data-duration="2s" data-delay=".8s">
                                    <Image src={item.img} alt="img" width={766} height={478}   />
                                
                            </div>
                            <div className="shape4 d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay="1s">
                                    <Image src="/assets/img/shape/bannerShape3_4.svg" alt="img" width={888} height={837}   />
                                
                            </div>
                            <div className="shape2"></div>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="banner-style3">
                                            <div className="subtitle" data-animation="slideInRight" data-duration="2s"
                                                data-delay=".3s">{item.subtitle}</div>
                                            <h1 className="title" data-animation="slideInRight" data-duration="2s"
                                                data-delay=".7s">
                                                {parse(item.title)}
                                            </h1>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay="2s">{item.content}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="banner-bottom  z-3 position-relative">
                                <div className="container-fluid  d-flex align-items-center justify-content-between">
                                    <div className="fancy-item">
                                    <i className="bi bi-geo-alt-fill text-theme-color2"></i> <span
                                            className=" text-white">{item.location}</span>
                                    </div>
                                    <div className="social-meta d-flex  flex-column flex-md-row align-items-center gap-2">
                                        <p className="text-white">Follow Us:</p>
                                        <ul className="d-flex align-items-center gap-2">
                                            <li><a href="https://www.facebook.com"><i className="bi bi-facebook text-white"></i></a></li>
                                            <li><a href="https://www.twitter.com"><i className="bi bi-twitter-x text-white"></i></a></li>
                                            <li><a href="https://www.linkedin.com"><i className="bi bi-linkedin text-white"></i></a></li>
                                            <li><a href="https://www.youtube.com"><i className="bi bi-youtube text-white"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>

                </div>

                <div onClick={previous} className="arrow-prev3"><Image src="/assets/img/icon/arrowPrev.svg" alt="img" width={40} height={40}   /></div>
                <div onClick={next} className="arrow-next3"><Image src="/assets/img/icon/arrowNext.svg" alt="img" width={40} height={40}   /></div>
                <div className="pagination-className3 swiper-pagination"></div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanneer3;