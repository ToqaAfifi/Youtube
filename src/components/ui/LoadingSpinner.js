import { TailSpin } from "react-loader-spinner";
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {

    return (
        <div className={classes.loader}>
            <TailSpin
                height="80"
                width="80"
                color="gray"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperClass="spinner"
                visible={true}
            />
            Loading
        </div>
    )
}

export default LoadingSpinner;