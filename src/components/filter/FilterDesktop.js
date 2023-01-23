import { MdFilterList } from "react-icons/md";
import Button from "../ui/Button";
import classes from './FilterDesktop.module.scss';

const FilterDesktop = () => {

    const filteredResults = 0;

    return (
        <div className={classes.filter}>
            <p>About {filteredResults} filtered results</p>
            <Button><MdFilterList /> Filter</Button>
        </div>
    )
}

export default FilterDesktop;