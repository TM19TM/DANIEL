function f(n) {
    if(n == 1) return 1;
    if(n > 1) return n + f(n-1);
    return undefined;
}

//f(n) {1, n=1}
//     {n+f(n-1), n>1}

//Soma i=1  i= 1+2+3+...+(n-2)+(n-1)+n