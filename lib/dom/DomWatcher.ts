export class DomWatcher {
    private observer: MutationObserver;
    
    constructor() {
        this.observer = new MutationObserver(() => { });
    }
}
