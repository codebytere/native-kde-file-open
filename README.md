### Native KDE File Open

This module allows for the opening of a native file window in KDE distributions, and is intended for use in Electron applications until a
full fix has been created for [this](https://github.com/electron/electron/issues/2911) issue.

To use:

```javascript
  const nativePicker = require('native-kde-file-open');

  // to open single file or multiple files, with promise
  nativePicker.openFile().then(ret => {
    console.log(ret);
  });

  // to open single file or multiple files, with callback
  nativePicker.openFile((err, ret) => {
    console.log(ret);
  });

  // to save single file or multiple files, with promise
  nativePicker.saveFile().then(ret => {
    console.log(ret);
  });

  // to save single file or multiple files, with callback
  nativePicker.saveFile((err, ret) => {
    console.log(ret);
  });
```
