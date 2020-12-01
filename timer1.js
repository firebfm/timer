const args = process.argv.slice(2)

const timer1 = () => {
  for (let item of args) {
    let numItem = Number(item);
    if (numItem) {
      if (numItem >= 0) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, numItem * 1000);
      }
    }
  }
}

timer1();