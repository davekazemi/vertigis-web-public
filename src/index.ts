import type { LibraryRegistry } from "@vertigis/web/config";

import ImageSlider from "./components/ImageSlider/ImageSlider";
import ImageSliderModel from "./components/ImageSlider/ImageSliderModel";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoPlayerModel from "./components/VideoPlayer/VideoPlayerModel";



const LAYOUT_NAMESPACE = "custom.548e407b";

export default function (registry: LibraryRegistry): void {

    registry.registerComponent({
        // Show in the `map` category of the component toolbox.
        name: "image-slider",
        namespace: LAYOUT_NAMESPACE,
        getComponentType: () => ImageSlider,
        itemType: "image-slider-model",
        title: "Image Slider",
    });

    registry.registerCommand({
        name: "image-slider.set-slides",
        itemType: "image-slider-model",
    });


    registry.registerModel({
        getModel: (config) => new ImageSliderModel(config),
        itemType: "image-slider-model",
    });

    registry.registerComponent({

        name: "video-player",
        namespace: LAYOUT_NAMESPACE,
        getComponentType: () => VideoPlayer,
        itemType: "video-player-model",
        title: "Video Player",
    });

    registry.registerModel({
        getModel: (config) => new VideoPlayerModel(config),
        itemType: "video-player-model",
    });

    registry.registerCommand({
        name: "video-player-set-url",
        itemType: "video-player-model",
    });

}
