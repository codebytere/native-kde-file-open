const exec = require('child_process').exec;
const os = require('os');
const fs = require('fs');

const platform = os.platform();

// open a file with kdialog
function openFile() {
  if (platform !== 'linux') {
    throw new Error('Module intended to be run on Linux KDE distributions.');
  }
  return new Promise((resolve, reject) => {
    exec('kdialog --getopenfilename .', (err, stdout, stderr) => {
      if (err !== null) {
        throw new Error(`error: ${err}`);
      }
      console.log(`file_name: ${stdout}`);
      const contents = fs.readFileSync(stdout.trim(), 'utf8');
      resolve(contents);
    });
  });
}

// save a file with kdialog
function saveFile() {
  if (platform !== 'linux') {
    throw new Error('Module intended to be run on Linux KDE distributions.');
  }
  return new Promise((resolve, reject) => {
    exec('kdialog --getsavefilename .', (err, stdout, stderr) => {
      if (err !== null) {
        throw new Error(`error: ${err}`);
      }
      console.log(`file_name: ${stdout}`);
      const contents = fs.readFileSync(stdout.trim(), 'utf8');
      resolve(contents);
    });
  });
}

module.exports = {
  openFile,
  saveFile,
}
