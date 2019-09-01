type WatcherTitleFound = (title: string) => void;

export class DomWatcher {
    private observer: MutationObserver;

    constructor(target: Node, private callback: WatcherTitleFound) {
        this.observer = new MutationObserver(mutations => {
            this.onMutation(mutations);
        });
        this.observer.observe(target, {
            subtree: true,
            childList: true
        });
    }

    private onMutation(mutations: MutationRecord[]) {
        const bobCardCreated = mutations.some(m => {
            return m.type === 'childList'
                && m.addedNodes.length > 0
                && (m.addedNodes[0] as Element).classList.contains('bob-card');
        });

        if (bobCardCreated) {
            const titleElement = document.querySelector('.bob-title') as Element;
            const title = titleElement.textContent;
            this.callback(title);
        }
    }
}
