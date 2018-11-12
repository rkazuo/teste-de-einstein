class Elemento {
    constructor(posicao,atributos) {
        this._posicao = posicao;
        this._atributos = atributos;
    };

    get posicao() {
        return this._posicao;
    };

    get atributos() {
        return this._atributos;
    };

    set posicao(valor) {
        this._posicao = valor;
    };

    set atributos(valor) {
        this._atributos = valor;
    };
}