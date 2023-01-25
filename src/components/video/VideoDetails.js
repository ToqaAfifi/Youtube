import useLayout from '../../hooks/use-layout';
import formatPublishTime from '../../util/formatPublishTime';
import classes from './VideoDetails.module.scss';

const VideoDetails = ({ channelTitle, description, liveBroadcastContent, publishTime, title, kind }) => {

    const { layout } = useLayout();

    let content = <>
        {kind === "youtube#channel" ?

            <>
                <h3>{channelTitle}</h3>
                <p>{description}</p>
            </>
            :
            <>
                <h3 style={{marginBottom: "4px"}}>{liveBroadcastContent !== "none" && <span>🔴</span>} {title}</h3>
                <span>{channelTitle} • {formatPublishTime(publishTime)}</span>
                <p>{liveBroadcastContent !== "none" && <span>🔴LIVE:</span>}{description}</p>
            </>
        }
    </>

    if (layout === "mobile") {
        content = <>
            {kind === "youtube#channel" ?
                <h3>{channelTitle}</h3>
                :
                <>
                    <h4>{liveBroadcastContent !== "none" && <span>🔴</span>} {title.slice(0, 50)}</h4>
                    <span>{channelTitle}</span>
                </>
            }
        </>
    }

    return (
        <div className={classes.details}>
            <div className={classes.videoStats}>
                {content}
            </div>
        </div>
    )
}

export default VideoDetails;