let board_size = 8

for (let row = 0; row < board_size; row++) {
    let line = '';

    for (let col = 0; col < board_size; col++) {
        if ((row + col) % 2 === 0) {
            line += '*';
        } else {
            line += '#';
        }
    }

    console.log(line);
    console.log();
}
