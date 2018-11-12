class Teste {
    constructor(tamanho, regras) {
        this._tamanho = tamanho;
        this._regras = regras;
        this._elementos = this._criaElementos();
    }

    get atributos() {
        return this._atributos;
    }

    get regras() {
        return this._regras;
    }

    get elementos() {
        return this._elementos;
    }

    valor(posicao, valor) {
        this._elementos[posicao - 1].set(valor);
    }

    concluido() {
        let concluido = true;
        this._regras.forEach(regra => {
            if (!regra.valida(this._elementos)) concluido = false;
        });
        return concluido;
    }

    _criaElementos() {
        let elementos = [];
        for (let i=1;i<=this._tamanho;i++) {
            elementos.push(new Elemento(i,[]));
        }
        return elementos;
    }

}