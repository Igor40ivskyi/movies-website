import {FC} from "react";
import {useNavigate} from "react-router-dom";

import './Badge.css'

interface IProps{
    genre:{id:number, name: string;}
}

const Badge: FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div>
            <div className={'badge'} onClick={() => navigate(`/movies/by-genre?genreId=${id}&page=1`)}>
                {name}
            </div>
        </div>
    );
};

export {Badge};