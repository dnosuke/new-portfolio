import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css"
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import * as C from "./styles";
import website1 from "../../assets/images/searchSite.png"
import website2 from "../../assets/images/portfolio2.jpg"
import website3 from "../../assets/images/portfolio3.jpg"

export const Portfolio = () => {

    return (
        <C.Container>
            <div className="name" id="portfolio">
                <h2>Portfolio</h2>
                <span>Most recente work</span>
            </div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <C.Data>
                        <img src={website1} alt="website" />

                        <div className="itens">
                        <h3>Website with React</h3>
                        <p>Website adaptable, with ui components and animated interactions. This site uses React, Styled-components and integration with TMDB API and Youtube API.
                        </p>
                        <a href="https://movie-search-sigma.vercel.app/" className="button">
                            Demo
                            <i className="uil uil-arrow-right"></i>
                        </a>
                        </div>
                    </C.Data>
                </SwiperSlide>

                <SwiperSlide>
                    <C.Data>
                        <img src={website2} alt="website" />

                        <div className="itens">
                        <h3>Modern Website</h3>
                        <p>Website adaptable to all devices, with ui components and animated interactions.
                        </p>
                        <a href="#" className="button">
                            Demo
                            <i className="uil uil-arrow-right"></i>
                        </a>
                        </div>
                    </C.Data>
                </SwiperSlide>

                <SwiperSlide>
                    <C.Data>
                        <img src={website3} alt="website" />
                        
                        <div className="itens">
                        <h3>Modern Website</h3>
                        <p>Website adaptable to all devices, with ui components and animated interactions.
                        </p>
                        <a href="#" className="button">
                            Demo
                            <i className="uil uil-arrow-right"></i>
                        </a>
                        </div>
                    </C.Data>
                </SwiperSlide>
            </Swiper>
        </C.Container>
    )
}