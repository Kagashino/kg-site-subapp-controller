# KG-Site Sub-app Controller

KG-site sub-app lifecycle controller based on document event.

## Install
> npm install kg-site-subapp-controller

## Usage
```typescript jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { bootstrap } from '@kgshino/subapp-controller';
import App from './src/App';

bootstrap('my-app', {
  onLaunch (container) {
    ReactDOM.render(<App />, contaienr);
  },
  onClose (container) {
    ReactDOM.unmountComponentAtNode(container);
  },
  fallback () {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
})
```


## API

> bootstrap(subAppName, config)
### subAppName
Unique name in `kg-site-subapp`.
### config
|prop|type|desc|default|
|:----:|:----:|:----:|:----:|
|selector|string|Sub app dom container id| `subAppName`|
|fallback|`()=>void`|Callback when container not exist| `undefined`|
|launchEventName|string|Custom launch event name|`LAUCH_APP:${subAppName}`|
|closeEventName|string|Custom close event name|`CLOSE_APP:${subAppName}`|
|onLaunch|`(container: HTMLElement) => void` |Callback when launch event fired|`undefined`|
|onClose|`(container: HTMLElement) => void` |Callback when close event fired|`undefined`|
