var fs = require('fs-extra');

const project = process.argv[2];
fs.removeSync('../release/' + project);
console.log('Cleaned ' + project + '!');
const packageJson = JSON.parse(fs.readFileSync('../src/' + project + '/package.json'));
delete packageJson.scripts;
delete packageJson.devDependencies;

fs.mkdirSync('../release/' + project);
console.log('Prepared ' + project + '!');

fs.writeFileSync('../release/' + project + '/package.json', JSON.stringify(packageJson, null, 4));
console.log('Created package.json!');

fs.copy(
  '../src/' + project + '/dist',
  '../release/' + project,
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
    const fileName = (execSync('cd ../release/' + project + ' && npm pack') + '').replace(/(\r\n|\n|\r)/gm, '');

    const src = __dirname.replace(/\\/g, '/') + '/../release/' + project + '/' + fileName;

    const dest = process.cwd().replace(/\\/g, '/') + '/../release/' + project + '@latest.tgz';
    const originDest = process.cwd().replace(/\\/g, '/') + '/../release/' + fileName;
    console.log('Moving package!');
    fs.copySync(src, originDest, { overwrite: true });
    fs.moveSync(src, dest, { overwrite: true });
    console.log('Deleting...');
    fs.remove('../release/' + project);
    fs.remove('../release/' + project + '@latest.tgz');
    console.log('Released codes!');
  },
);
