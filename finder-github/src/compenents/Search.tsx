import {BsSearch} from "react-icons/bs";

const Search = () => {
    return (
        <div>
            <h2>Busque por usuario:</h2>
            <p>conheça seus melhores repositórios</p>
            <div>
                <input type="text" name="" id="" placeholder="Digite o nome do usuario:"/>
                <button>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search