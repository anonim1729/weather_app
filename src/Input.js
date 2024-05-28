import { FaSearch } from "react-icons/fa";

const Input = ({ input, setInput, handleOnClick }) => {
    return (
        <div className="backdrop-blur-md bg-transparent bg-opacity-20 rounded p-2 w-3/4 max-w-md m-2 h-12 shadow-md shadow-black flex items-center top-0 fixed">
            <form onSubmit={(e) => { e.preventDefault(); handleOnClick(); }} className="flex items-center w-full">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow outline-none h-full p-2 bg-transparent text-white placeholder-white"
                    placeholder="Search..."
                />
                <button type="submit" className="text-white h-full flex items-center p-2">
                    <FaSearch />
                </button>
            </form>
        </div>
    );
}

export default Input;

