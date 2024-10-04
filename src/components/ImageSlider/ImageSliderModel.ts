import { command } from "@vertigis/web/messaging/decorators";
import type {
    ComponentModelProperties,
    } from "@vertigis/web/models";
import {
    ComponentModelBase,
    serializable
} from "@vertigis/web/models";

interface SlideItem {
    url: string;
    title: string;
}

interface ImageSliderModelProperties {
    slides?: SlideItem[];
}


interface ImageSliderModelProperties extends ComponentModelProperties {
    imageDataVariable?: string;
}

@serializable
export default class ImageSliderModel extends ComponentModelBase<ImageSliderModelProperties> {
    slides: SlideItem[] = [];

    @command("image-slider.set-slides")
    protected async setSlides(slides: SlideItem[]): Promise<void> {
        this.slides = slides;
    }
}