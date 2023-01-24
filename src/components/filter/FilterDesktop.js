import { MdFilterList } from "react-icons/md";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import classes from './FilterDesktop.module.scss';

const FilterDesktop = () => {

    const filteredResults = useSelector(state => state.videos.data.totalResults);

    return (
        <div className={classes.filter}>
            <p>About {filteredResults} filtered results</p>
            <Button><MdFilterList /> Filter</Button>
        </div>
    )
}

export default FilterDesktop;