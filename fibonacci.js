function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }

    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
// 
// Example usage:
const numberOfTerms = 10;
const result = fibonacci(numberOfTerms);
console.log(`The first ${numberOfTerms} terms of the Fibonacci sequence are: ${result}`);



/* 
In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

ex: 
1+1 =2
1+2=3
2+3=5
3+5=8
**  5+8=13
8+13=21
*/