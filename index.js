const exec = require('child_process').exec;
const os = require('os');

const platform = os.platform();

function openKDEFileWindow() {
  if (platform === 'linux') {
    exec('kdialog --getopenfilename .');
  } else {
    throw new Error('This is intended to be run on Linux KDE distributions.')
  }
}

module.exports = openKDEFileWindow;
