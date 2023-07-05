import {Swiper, SwiperSlide} from 'swiper/react';

import {FC} from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {IMovie} from "../../interfaces/movie.interface";

interface IProps {
    list: IMovie[];
}

const Slider: FC<IProps> = ({list}) => {

    const arr = [] as string[];

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    list.map((item) => {
        const poster_path = item.poster_path;
        let fullPoster_path = `${FirstHalfOfPoster}${poster_path}`;
        arr.push(fullPoster_path);
    });

    console.log(arr);


    // if (!poster_path) {
    //     fullPoster_path = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    // }

    return (
        <Swiper style={{width:200}}
            // @ts-ignore
            spaceBetween={-110}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {arr.map(item => <SwiperSlide style={{height: 200, width: 200}}>
                <img style={{height:200,width:200}} src={item} alt="xxx"/>
            </SwiperSlide>)}
        </Swiper>
    );
};

export {Slider};