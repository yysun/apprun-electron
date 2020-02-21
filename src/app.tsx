import { ipcRenderer } from 'electron';

import app from 'apprun';
import Top from './top';
import Left from './left';
import Main from './main';

setTimeout(() => {
  new Top().start('top');
  new Left().start('left');
  new Main().start('main');
}, 100);

app.on('@electron', (...arg) => ipcRenderer.send('@electron', ...arg));
ipcRenderer.on('@apprun', (_, event, ...args) => app.run(event, ...args));
