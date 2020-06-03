interface Config {
    selector?: string;
    fallback?: () => void;
    launchEventName?: string;
    closeEventName?: string;
    onLaunch?: (container: HTMLElement) => void;
    onClose?: (container: HTMLElement) => void;
}
export declare function bootstrap(subAppName: string, { selector, launchEventName, closeEventName, onLaunch, onClose, fallback }: Config): void;
export {};
