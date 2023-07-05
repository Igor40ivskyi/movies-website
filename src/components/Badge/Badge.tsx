import './Badge.css'
import {FC} from "react";

interface IProps{
    genre:{id:number, name: string;}
}

const Badge: FC<IProps> = ({genre}) => {

    const {id, name} = genre;

    return (
        <div>
            <div className={'badge'}>
                {name}
            </div>
        </div>
    );
};

export {Badge};