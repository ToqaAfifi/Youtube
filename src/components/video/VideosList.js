import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";
import classes from './VideosList.module.scss';

const VideosList = () => {

    const { data, error } = useSelector(state => state.videos);
    
    if (error) {
        return <div className={classes.error}>
            <h3>{error.name}</h3>
            <p>{error.code}: {error.message}</p>
        </div>
    }

    if (data.videosList.length === 0) {
        return <p>Type in a search term</p>
    }

    return data.videosList.map(video => <VideoItem key={video.id} video={video} />)
}

export default VideosList;