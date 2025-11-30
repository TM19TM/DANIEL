function f(n) {
    if (n == 1) return 2; //como i(tem o valor igual a 1) ta com o valor multiplicado por 2 retorna 2
    if (n > 1) return (2*n) + f(n - 1);
    return undefined;
}

// f(n) {2, n=1}
//      {(2*n)+f(n-1), n>1}

//Soma i=1  2i= 2+4+6+...+(2n-2)+(2n-1)+2n