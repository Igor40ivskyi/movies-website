import {useAppSelector} from "../../hooks";
import {RecommendationsItem} from "../RecommendationsItem/RecommendationsItem";

import './RecommendationsList.css'


const RecommendationsList = () => {

    const {recommendationsList} = useAppSelector(state => state.movieReducer);


    return (
        <div className={'recommendationsContainer'}>
            {recommendationsList && recommendationsList.map(movie => <RecommendationsItem key={movie.id}
                                                                                          movie={movie}/>)}
        </div>
    );
};

export {RecommendationsList};