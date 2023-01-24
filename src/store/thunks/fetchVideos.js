import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchVideos = createAsyncThunk('videos/fetch', async (searchTerm) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}`, {
        params: {
            part: "snippet",
            channelType: "any",
            maxResults: 20,
            order: "relevance",
            type: [
                "channel",
                "video",
                "playlist"
            ],
            q: searchTerm
        }
    });

    let data = {};
    data.totalResults = response.data.pageInfo.totalResults;
    data.videosList = [];

    response.data.items.forEach(video => {

        let customId;

        if (video.id.kind === "youtube#video") {
            customId = video.id.videoId;
        }
        else if (video.id.kind === "youtube#channel") {
            customId = video.id.channelId;
        }
        else {
            customId = video.id.playlistId;
        }

        const videoData = {
            id: customId,
            kind: video.id.kind,
            channelId: video.snippet.channelId,
            channelTitle: video.snippet.channelTitle,
            description: video.snippet.description,
            liveBroadcastContent: video.snippet.liveBroadcastContent,
            publishTime: video.snippet.publishTime,
            thumbnail: video.snippet.thumbnails.medium,
            title: video.snippet.title,
        };

        data.videosList.push(videoData);
    });

    return data;
})
