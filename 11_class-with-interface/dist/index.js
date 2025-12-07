console.log("working");
class Instagram {
    format;
    cameraMode;
    filter;
    burstClips;
    zoom;
    dimensions;
    sizeInMB;
    focus;
    constructor(format, cameraMode, filter, burstClips, zoom, dimensions, sizeInMB, focus) {
        this.format = format;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstClips = burstClips;
        this.zoom = zoom;
        this.dimensions = dimensions;
        this.sizeInMB = sizeInMB;
        this.focus = focus;
    }
    reportInfo() {
        return {
            filter: this.filter,
            burstClips: this.burstClips,
            zoom: this.zoom,
            camerMode: this.cameraMode,
        };
    }
}
const hitesh = new Instagram('jpeg', 'portrait', 'black&white', 3, 2, [50, 70], 12, 'high');
console.log(hitesh.reportInfo());
class YoutubeShorts {
    shortClip;
    fps;
    duration;
    device;
    path;
    creationDate;
    constructor(shortClip, fps, duration, device, path, creationDate) {
        this.shortClip = shortClip;
        this.fps = fps;
        this.duration = duration;
        this.device = device;
        this.path = path;
        this.creationDate = creationDate;
    }
    // public createStory: () => void,
    createStory() {
        const story = {
            device: this.device,
            date: this.creationDate,
            fps: this.fps,
            Id: this.shortClip,
        };
        console.log(story);
    }
}
;
const ytShort = new YoutubeShorts('hello@123', 60, 100, 'dslr', './main/dir', new Date(Date.now()).toLocaleDateString());
// console.log();
ytShort.createStory();
export {};
//# sourceMappingURL=index.js.map