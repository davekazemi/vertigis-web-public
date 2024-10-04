import type { LayoutElementProperties } from "@vertigis/web/components";
import { useWatchAndRerender } from "@vertigis/web/ui";
import React from 'react';
import ReactPlayer from 'react-player';

import type VideoPlayerModel from "./VideoPlayerModel";

import './VideoPlayer.css';

type VideoPlayerProps = LayoutElementProperties<VideoPlayerModel>;

const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {

    const { model } = props;

    useWatchAndRerender(() => [model.videoUrl]);

    return (
        <div className="video-player-container">
            <ReactPlayer
                url={model.videoUrl}
                controls
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;