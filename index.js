const exec = require('child_process').exec;
const os = require('os');
const fs = require('fs');

const platform = os.platform();

// explicit call to nativePicker with --getopenfilename command
function openFile(cb) {
  return nativePicker('kdialog --getopenfilename .', cb);
}

// explicit call to nativePicker with --getsavefilename command
function saveFile(cb) {
  return nativePicker('kdialog --getsavefilename .', cb);
}

// call native file dialog and return either promise or callback
function nativePicker(execStr, cb) {
  if (platform !== 'linux') {
    throw new Error('Module intended to be run on Linux KDE distributions.');
  }
  const result = new Promise((resolve, reject) => {
    exec(execStr, (err, stdout, stderr) => {
      if (err) {
        return reject(err);
      }
      fs.readFile(stdout.trim(), 'utf8', (err, ret) => {
        if (err) {
          return reject(err);
        }
        resolve(ret);
      });
    });
  });
  return (cb) ? result.then(val => cb(null, val)).catch(cb) : result;
}

module.exports = {
  openFile,
  saveFile,
}
