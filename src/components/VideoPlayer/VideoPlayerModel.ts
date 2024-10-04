import { command } from "@vertigis/web/messaging/decorators";
import type {
    ComponentModelProperties,
} from "@vertigis/web/models";
import {
    ComponentModelBase,
    serializable
} from "@vertigis/web/models";

interface VideoPlayerModelProperties extends ComponentModelProperties {
    videoUrlVariable?: string;
}

@serializable
export default class VideoPlayerModel extends ComponentModelBase<VideoPlayerModelProperties> {
    videoUrl: string = "";

    @command("video-player-set-url")
    protected async setVideoUrl(url: string): Promise<void> {
        this.videoUrl = url;
    }
}