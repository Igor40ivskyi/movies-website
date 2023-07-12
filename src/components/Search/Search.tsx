import './Search.css';

const Search = () => {
    return (
        <div className={'search_container'}>

            <div  className={'search'} id={'sss'}>
                <div onClick={() => {
                    const div = document.getElementById('sss');
                    console.log(div);
                    div.classList.toggle('active');
                }} className={'icon'}>
                    <img src="https://w7.pngwing.com/pngs/668/951/png-transparent-magnifying-glass-computer-icons-encapsulated-postscript-magnifying-glass-magnifier-tool-terminal-icon.png" alt="search"/>
                </div>
                <input type="text" placeholder={'search'}/>
            </div>

        </div>
    );
};

export {Search};