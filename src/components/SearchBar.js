import { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchVideos } from "../store/thunks/fetchVideos";
import Button from './ui/Button';
import { GoSearch } from 'react-icons/go';
import classes from './SearchBar.module.scss';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    // const { isLoading } = useSelector(state => state.videos);

    const searchHandler = (e) => {
        
        e.preventDefault();
        if (!searchTerm) {
            return;
        }

        dispatch(fetchVideos(searchTerm))
    }

    return (
        <form className={classes.classes}>
            <input type="search" placeholder="Search YouTube" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" onClick={searchHandler}>
                <GoSearch size={18}/>
            </Button>
        </form>
    )
}

export default SearchBar;