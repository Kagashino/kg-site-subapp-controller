interface Config {
  selector?: string,
  fallback?: () => void
  launchEventName?: string,
  closeEventName?: string,
  onLaunch?: (container: HTMLElement) => void,
  onClose?: (container: HTMLElement) => void
}


export function bootstrap(
  subAppName: string,
  {
    selector = subAppName,
    launchEventName = `LAUNCH_APP:${subAppName}`,
    closeEventName = `CLOSE_APP:${subAppName}`,
    onLaunch,
    onClose,
    fallback
  }: Config
) {

  const getContainer = () => document.getElementById(selector);
  if (!getContainer() || !onLaunch) {
    return fallback && fallback()
  }

  document.addEventListener(launchEventName, ()=> {
    onLaunch(getContainer());
  });

  document.addEventListener(closeEventName, ()=>{
    const container: HTMLElement | null = getContainer();
    if (!container || !onClose) {
      return;
    }
    onClose(container);
  })
}

