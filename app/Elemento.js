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

    set(atributo) {
        let atr = this._atributos.find(e => e.includes(atributo.split(/:/)[0]));
        if (atr == null) this._atributos.push(atributo);
        else this._atributos[this._atributos.indexOf(atr)]=atributo;
        atr = this._atributos.find(e => e.includes(atributo.split(/:/)[0]));
    };

    get(atributo) {
        return this._atributos.filter(e => e.includes(atributo))[0];
    };

}