var fs = require('fs-extra');

const project = process.argv[2];
fs.removeSync('../releases/' + project);
console.log('Cleaned ' + project + '!');
const packageJson = JSON.parse(fs.readFileSync('../' + project + '/package.json'));
delete packageJson.scripts;
delete packageJson.devDependencies;

fs.mkdirSync('../releases/' + project);
console.log('Prepared ' + project + '!');

fs.writeFileSync('../releases/' + project + '/package.json', JSON.stringify(packageJson, null, 4));
console.log('Created package.json!');

fs.copy(
  '../' + project + '/dist',
  '../releases/' + project,
  {
    filter: (src, dst) => {
      return src.indexOf('__test__') < 0 && src.indexOf('.test.ts') < 0;
    },
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Packing!');
    const { execSync } = require('child_process');
    const fileName = (execSync('cd ../releases/' + project + ' && npm pack') + '').replace(/(\r\n|\n|\r)/gm, '');

    const src = __dirname.replace(/\\/g, '/') + '/../releases/' + project + '/' + fileName;

    const dest = process.cwd().replace(/\\/g, '/') + '/../releases/' + project + '@latest.tgz';
    const originDest = process.cwd().replace(/\\/g, '/') + '/../releases/' + fileName;
    console.log('Moving package!');
    fs.copySync(src, originDest, { overwrite: true });
    fs.moveSync(src, dest, { overwrite: true });
    console.log('Deleting...');
    fs.remove('../releases/' + project);
    console.log('Released codes!');
  },
);
