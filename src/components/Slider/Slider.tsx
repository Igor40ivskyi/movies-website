import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {FC} from "react";
import {IMovie} from "../../interfaces/movie.interface";

import './Slider.css'

interface IProps {
    list: IMovie[];
}

const Slider: FC<IProps> = ({list}) => {

    const arr = [] as string[];

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    list.map((item) => {
        const poster_path = item.backdrop_path;
        let fullPoster_path = `${FirstHalfOfPoster}${poster_path}`;
        arr.push(fullPoster_path);
    });

    console.log(arr);

    return (
        <Swiper
    // @ts-ignore
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // @ts-ignore
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {arr.map((item, index) =>
                <SwiperSlide key={index}>
                    <img style={{height: 260, width: '100%'}} src={item} alt="xxx"/>
                    <div className={'xxx'}>
                        XXXXXXXXXXXX
                    </div>
                </SwiperSlide>
            )}
            {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
        </Swiper>
    );
};

export {Slider};