function f(n) {
    if (n == 1) return 3;
    if (n > 1) return (3*n) + f(n-1);
    return undefined;
}

//f(n) {3, n=1}
//     {(3*n)+f(n-1), n>1} 

//Soma i=1   3i= 2+5+8+11+14+...+(3n-2)+(3n-1)+3n