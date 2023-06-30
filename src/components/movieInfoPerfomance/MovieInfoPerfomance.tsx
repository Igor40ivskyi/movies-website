import {FC} from "react";
import {IMovieInfo} from "../../interfaces/movieInfo.interface";
import {ITrailer} from "../../interfaces/trailer.interface";
import YouTube from "react-youtube";

interface IProps {
    movieInfo: IMovieInfo;
    trailer: ITrailer;
}

const MovieInfoPerfomance: FC<IProps> = ({movieInfo, trailer}) => {

    return (
        <div>
            {/*<YouTube videoId={trailer.results[0].key}/>*/}
        </div>
    );
};

export {MovieInfoPerfomance};