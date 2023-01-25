import { useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchVideos } from "../store/thunks/fetchVideos";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { GoSearch } from 'react-icons/go';
import Button from './ui/Button';
import classes from './SearchBar.module.scss';

const SearchBar = ({ layout }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const searchHandler = (e) => {

        e.preventDefault();
        if (!searchTerm) {
            return;
        }

        if (layout === "desktop") {
            dispatch(showLoading())
            dispatch(fetchVideos(searchTerm)).finally(() => dispatch(hideLoading()));
        }
        else {
            dispatch(fetchVideos(searchTerm))
        }
    }

    return (
        <form className={classes.classes}>
            <input type="search" placeholder="Search YouTube" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" onClick={searchHandler}>
                <GoSearch size={18} />
            </Button>
        </form>
    )
}

export default SearchBar;