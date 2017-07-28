const execSync = require('child_process').execSync;
const os = require('os');
const fs = require('fs');

const platform = os.platform();

const TYPES = [
  'save',
  'open',
]

module.exports = (type) => {
  if (platform === 'linux') {
    switch (type.toLowerCase()) {
      case 'open':
        execSync('kdialog --getopenfilename .', (err, stdout, stderr) => {
          if (err !== null) { throw new Error(err); }
          console.log(`file_name: ${stdout}`);
          return fs.readFileSync(stdout.trim());
        });
        break;
      case 'save':
        execSync('kdialog --getsavefilename .', (err, stdout, stderr) => {
          if (err !== null) { throw new Error(err); }
          console.log(`file_name: ${stdout}`);
          return fs.readFileSync(stdout.trim());
        });
        break;
      default:
        throw new Error('Invalid dialog box type specified.');
    }
  } else {
    throw new Error('This is intended to be run on Linux KDE distributions.')
  }
}
