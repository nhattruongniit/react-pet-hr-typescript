import { copy } from 'fs-extra';

const src = process.argv[2];
const dest = process.argv[3];
copy(src, dest)
  .then(() => {
    console.log('Copied!');
  })
  .catch((err) => {
    console.error(err);
  });
