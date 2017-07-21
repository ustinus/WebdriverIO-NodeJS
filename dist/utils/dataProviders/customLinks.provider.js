let customLinks = ["https://www.apple.com/today/", "https://www.apple.com/today/event/kids-hour-sphero-maze-challenge-coding-6290844758047056773/", "https://www.apple.com/today/event/studio-hours-all-projects-6285164453193709677/", "https://www.apple.com/today/event/studio-hours-all-projects-6285224160688186985/", "https://www.apple.com/today/event/photo-walks-capturing-action-and-video-6289536213355724137/", "https://www.apple.com/today/event/how-to-discover-apple-music-6289536616218602605/"];

class Provider {
    constructor(data) {
        this.data = data;
    }
}

class CustomLinksProvider extends Provider {
    constructor(data) {
        super(data);
    }
}

export const customLinksProvider = new CustomLinksProvider(customLinks);