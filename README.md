### Native KDE File Open

This module allows for the opening of a native file window in KDE distributions, and is intended for use in Electron applications until a
full fix has been created for [this](https://github.com/electron/electron/issues/2911) issue.

To use:

```javascript
  const picker = require('native-kde-file-open');

  picker.openKDEFileWindow();
```
