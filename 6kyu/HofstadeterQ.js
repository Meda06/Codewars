// Hofstadter sequences are a family of related integer sequences, among which the first ones were described by American professor Douglas Hofstadter in his book Gödel, Escher, Bach.

// Task
// Today we will be implementing the rather chaotic recursive sequence of integers called Hofstadter Q.

// The Hofstadter Q is defined as follows:


// As the author states in the aforementioned book:

// It is reminiscent of the Fibonacci definition in that each new value is a sum of two previous values - but not of the immediately previous two values. Instead, the two immediately previous values tell how far to count back to obtain the numbers to be added to make the new value.

// The function produces the sequence

function hofstadterQ(n) {  
    const memo={}
     function computeQ(k) {
        if (k === 1 || k === 2) {
            return 1;
        }        
        if (memo[k]) {
            return memo[k];
        }
        memo[k] = computeQ(k - computeQ(k - 1)) + computeQ(k - computeQ(k - 2));
        return memo[k];
    }
   return computeQ(n);
}

// THIS ONE WAS VERY HARD 