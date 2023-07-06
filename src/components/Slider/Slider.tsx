import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {FC} from "react";
import {IMovie} from "../../interfaces/movie.interface";
import './Slider.css'
import {useNavigate} from "react-router-dom";


interface IProps {
    list: IMovie[];
}

const Slider: FC<IProps> = ({list}) => {


    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    const navigate = useNavigate();

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

            {list&& list.map(item=> {
                const pic = item.backdrop_path;
                let fullPoster_path = `${FirstHalfOfPoster}${pic}`;

                if (!pic) {
                    // fullPoster_path = 'https://vet.ge/images/noImageFound.png';
                    fullPoster_path = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
                }

                return <SwiperSlide key={item.id}>
                    <div className={'recommendedItemWrap'} onClick={() => navigate('/movies/info',{state:{id:item.id}})}>
                        <img style={{width: '100%', height: 260}} src={fullPoster_path} alt={item.title}/>
                        <div className={'recommendedItemTitle'}>{item.title}</div>
                    </div>
                </SwiperSlide>;
            })}

            {/*{arr.map((item, index) =>*/}
            {/*    <SwiperSlide key={index}>*/}
            {/*        <img style={{height: 260, width: '100%'}} src={item} alt="xxx"/>*/}
            {/*        <div className={'xxx'}>*/}
            {/*            XXXXXXXXXXXX*/}
            {/*        </div>*/}
            {/*    </SwiperSlide>*/}
            {/*)}*/}
        </Swiper>
    );
};

export {Slider};