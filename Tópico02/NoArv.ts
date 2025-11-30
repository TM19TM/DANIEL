class NoArv<T> {
    dado: T;
    esq: NoArv<T> | null;
    dir: NoArv<T> | null;
    constructor(dado: T) {
        this.dado = dado;
        this.esq = null;
        this.dir = null;
    }
}

function inserir(no_arv: NoArv<any> | null, dado: any):NoArv<any> {
    if (no_arv === null) {
        return new NoArv(dado);
    }
    if (dado === no_arv.dado) {
        return no_arv;
    }
    if (dado < no_arv.dado) {
        no_arv.esq = inserir(no_arv.esq, dado);
    }
    else{
        no_arv.dir = inserir(no_arv.dir, dado);
    }
    return no_arv;
}

function contar_nos(no_raiz: NoArv<any> | null): number {
    if (no_raiz === null) {
        return 0;
    }
    const nos_esq = contar_nos(no_raiz.esq);
    const nos_dir = contar_nos(no_raiz.dir);
    return nos_esq + nos_dir + 1;
}

function altura_arvore(no_arv: NoArv<any> | null): number {
    if (no_arv === null) {
        return -1;
    }
    const altura_esq = altura_arvore(no_arv.esq);
    const altura_dir = altura_arvore(no_arv.dir);
    return Math.max(altura_esq, altura_dir) + 1;
}

function caminho(no_raiz: NoArv<any> | null, busca: any): boolean {
    if (no_raiz === null) {
        return false;
    }
    if (no_raiz.dado === busca) {
        console.log(no_raiz.dado);
        return true;
    }
    let encontrou_na_esq = caminho(no_raiz.esq, busca);
    if (encontrou_na_esq) {
        console.log(no_raiz.dado);
        return true;
    }
    let encontrou_na_dir = caminho(no_raiz.dir, busca);
    if (encontrou_na_dir) {
        console.log(no_raiz.dado);
        return true;
    }
    return false;
}