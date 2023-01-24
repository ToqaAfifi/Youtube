import Card from '../ui/Card';
import classes from './VideoItem.module.scss';

const VideoItem = ({ thumbnail, description }) => {


    return (
        <Card>
            <div className={classes.image}>
                <img src={thumbnail.url} alt="thumbnail" width={thumbnail.width} height={thumbnail.height} />
            </div>
            <div className={classes.videoDetails}>
                {description}
            </div>
        </Card>
    )
}

export default VideoItem;