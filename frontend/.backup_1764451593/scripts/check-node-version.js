// frontend/scripts/check-node-version.js
const semver = (v) => v.split('.').map(x => parseInt(x, 10));
const node = process.version.replace(/^v/, '');
const [major] = semver(node);

// target Node major 20
if (major < 20 || major >= 21) {
  console.warn('\n****************************************************************');
  console.warn(`WARNING: This project expects Node v20.x (you are using v${node}).`);
  console.warn('Please use nvm to switch to Node 20:');
  console.warn('  nvm install 20 && nvm use 20');
  console.warn('If you continue with a different Node version you may see runtime errors.');
  console.warn('****************************************************************\n');
}
