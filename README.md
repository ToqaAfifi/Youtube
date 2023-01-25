Youtube Task Project
---------------------------------------------------------

## Introduction
Youtube Task.

## Overview
In this application, the main page displays a list of YouTube videos, where you can search for the desired video in the search bar.

## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── images # Helpful logos for the app.
│   │   ├── youtubeLogo.svg
│   │   └── youtubeMinLogo.svg
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   └── manifest.json # DO NOT MODIFY
└── src
    ├── components
    │   ├── filter
    │   │   ├── FilterDesktop.js # This Component implements the Filter section for the Desktop layout
    │   │   ├── FilterDesktop.module.scss # contains the styles for the FilterDesktop component
    │   │   ├── FilterMobile.js # This Component implements the Filter section for the Mobile layout
    │   │   └── FilterMobile.module.scss # contains the styles for the FilterMobile component
    │   ├── ui
    │   │   ├── Button.js # Custom Button Component
    │   │   ├── Card.js # Custom Card Component for better layout
    │   │   ├── Card.module.scss # contains the styles for the Card component
    │   │   ├── LoadingSpinner.js # Loading Spinner Component for mobile layout
    │   │   └── LoadingSpinner.module.scss # contains the styles for the LoadingSpinner component
    │   ├── videos
    │   │   ├── VideoDetails.js # Component displays the details of each video
    │   │   ├── VideoDetails.module.scss # contains the styles for the VideoDetails component
    │   │   ├── VideosItem.js # Component renders each video in the fetched Videos List
    │   │   ├── VideosItem.module.scss # contains the styles for the VideosItem component
    │   │   ├── VideosList.js # Component renders List of fetched Videos
    │   │   └── VideosList.module.scss # contains the styles for the VideosList component
    │   ├── Header.js # This Component implements the Header section.
    │   ├── Header.module.scss # contains the styles for the Header component
    │   ├── Search.js # # This Component implements the Search bar and the search Button section.
    │   └── Search.module.scss # contains the styles for the Search component
    ├── hooks
    │   └── use-layout.js # Custom-made hook to fetch the layout of the device (desktop/mobile)
    ├── store
    │   ├── slice
    │   │   └── videosSlice.js # a store slice for the videos 
    │   ├── thunks
    │   │   └── fetchVideos.js # async thunk that fetches the videos from the API
    │   └── index.js # index for configuring the redux store
    ├── util
    │   └── formatPublishTime.js # Converts the publish time to "Time Ago"
    ├── App.js # This is the root of the app and contains all the main functions.
    ├── index.scss # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Build Tools
* ReactJs
* Redux
* SCSS

## Installing All Required Packages
- `npm install`

## To Run Project
- cd into the root folder and run
- `npm start`

Open browser at http://localhost:3000/

## Backend Server

To simplify the development process, we're working with a YouTube Data API as a backend server to develop against. The provided file [`fetchVideos.js`](src/store/thunks/fetchVideos.js) contains the method needed to perform the necessary operation on the backend:

* [`search`](#search)

### `search`

Method Signature:

```js
fetchVideos(searchTerm)
```

* searchTerm: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection video objects containing the searchTerm in them.

## NOTE

* To use the API provided by YouTube, you need to use a valid API Key. So in [`fetchVideos.js`] file, set the `API_KEY` constant to your YouTube API Key instead of `process.env.REACT_APP_API_KEY`
