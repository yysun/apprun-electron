## Using AppRun in Electron App

This is a demo of using [AppRun](https://github.com/yysun/apprun) in the Electron app.


### Send message from the main process

Click the menu 'Hello' to send a message.

```javascript
mainWindow.webContents.send('@apprun', '#hello', 'from Electron Main');
```

The AppRun component, main.tsx, receives the message.

```javascript
  update = {
    '#hello': (_, msg) => msg
  }
```


### Send message from the renderer process

Click the button 'Hello to Electron main process' to send a message.

```javascript
app.run('@electron', 'hello', 'from', 'Renderer');
```

The Electron app receives and prints the message.

```javascript
ipcMain.on('@electron', (_, ...arg) => {
  console.log(...arg);
});
```

### Development

* Use _npm run dev_ to start the dev watch
* Use _npm start_ to start Electron
* Use _npm run build_ to build for production