import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading...</div>;
    }

const videoID = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoID}`;

    return(
    <div className='video-detail col-md-12'>
        <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={url}></iframe>
        </div>
        <div className='details'>
            <div><p>{video.snippet.title}</p></div>
            <div><p>{video.snippet.description}</p></div>
        </div>
    </div>
    )
}

export default VideoDetail;