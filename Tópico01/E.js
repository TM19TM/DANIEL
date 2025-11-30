function f(n) {
    if (n == 1) return 3;   
    if (n > 1) return (3*n) * f(n-1);
    return undefined;
}

//f(n) {3, n=1}
//     {(3*n)*f(n-1), n>1}

//Soma i=1   3i= 3*6*12*24*48*...*(3n-2)*(3n-1)*3n   