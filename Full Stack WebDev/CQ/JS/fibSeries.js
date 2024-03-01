function generateFibonacciWithLoop(n) {
  const fibonacciSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

const fibonacciSeriesWithLoop = generateFibonacciWithLoop(10);
console.log(fibonacciSeriesWithLoop);
