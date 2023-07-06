import {useAppSelector} from "../../hooks";
import {RecommendationsItem} from "../RecommendationsItem/RecommendationsItem";

import './RecommendationsList.css'


const RecommendationsList = () => {

    const {recommendationsList} = useAppSelector(state => state.movieReducer);


    return (
        <div className={'recommendationsContainer'}>

        </div>
    );
};

export {RecommendationsList};