import Card from '../ui/Card';
import VideoDetails from './VideoDetails';
import classes from './VideoItem.module.scss';

const VideoItem = ({ video }) => {

    let imgWidth = video.thumbnail.width;
    let imgHeight = video.thumbnail.height;

    if (!imgWidth) {
        imgWidth = 320;
        imgHeight = 180
    }

    return (
        <Card>
            <div className={classes.image}>
                <img src={video.thumbnail.url} className={video.kind === "youtube#channel" ? classes.channel : null} alt="thumbnail" width={imgWidth} height={imgHeight} />
            </div>
            <VideoDetails {...video} />
        </Card>
    )
}

export default VideoItem;