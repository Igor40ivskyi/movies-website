import './Search.css';
import {useState} from "react";

const Search = () => {

    const [searchValue, setSearchValue] = useState<string>('');

    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    const handleClearClick = () => {
        setSearchValue('');
    };

    return (
        <div className={'search_container'}>

            <div className={'search'} id={'sss'}>

                <div onClick={() => {
                    const div = document.getElementById('sss');
                    div.classList.toggle('active');
                }} className={'icon'}>
                </div>

                <div className={'input'}>
                    <input value={searchValue} onChange={handleInputChange} type="text" placeholder={'search'}
                           id={'input1'}/>
                </div>

                <span onClick={handleClearClick} className={'clear'}></span>
            </div>

        </div>
    );
};

export {Search};