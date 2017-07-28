const exec = require('child_process').exec;
const os = require('os');

const platform = os.platform();

const TYPES = [
  'save',
  'open'
]

module.exports = (type) => {
  if (platform === 'linux') {
    switch (type.toLowerCase()) {
      case 'open':
        exec('kdialog --getopenfilename .', (err, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          if (err !== null) {
            console.log(`exec error: ${err}`);
          }
        });
        break;
      case 'save':
        exec('kdialog --getsavefilename .', (err, stdout, stderr) => {
          console.log(`stdout: ${stdout}`);
          if (err !== null) {
            console.log(`exec error: ${err}`);
          }
        });
        break;
      default:
        throw new Error('Invalid dialog box type specified.')
    }
  } else {
    throw new Error('This is intended to be run on Linux KDE distributions.')
  }
}
