import classes from './FilterMobile.module.scss';

const FilterMobile = () => {

    return (
        <div className={classes.filter}>
            <select>
                <option>All</option>
            </select>
            <select>
                <option>Any Time</option>
            </select>
        </div>
    )
}

export default FilterMobile;