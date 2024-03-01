function myDisplayer(some, callback) {
  console.log(some);
  if (callback) {
    callback();
  }
}

function first() {
  myDisplayer("Hello", second);
}

function second() {
  myDisplayer("Goodbye");
}

function third() {
  myDisplayer("Ok!");
}

first();
