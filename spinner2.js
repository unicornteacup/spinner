process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r'+ spinner[i] +'  ');
  }, i * 300);
}

// }
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1000);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 2000);

