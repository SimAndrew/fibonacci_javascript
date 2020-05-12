function fibonacci(position) {
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
}
fibonacci(20); //6765

//Algorithm Fibonacci it take in a number (position) as a parameter.This (position) indicate which number from the Fibonacci return.
