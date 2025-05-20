import app, { server } from './app';

function main() {
  server.listen(7000, () => {
    console.log('Server is running');
  });
}

main();
