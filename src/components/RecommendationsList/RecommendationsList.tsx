import {useAppSelector} from "../../hooks";

import {Slider} from "../Slider/Slider";
import './RecommendationsList.css'


const RecommendationsList = () => {

    const {recommendationsList} = useAppSelector(state => state.movieReducer);


    return (
        <div className={'recommendationsContainer'}>
            <div className={'seeTheRecommendations'}>
                See the recommendations
            </div>
            {recommendationsList && <Slider list={recommendationsList}/>}
        </div>
    );
};

export {RecommendationsList};