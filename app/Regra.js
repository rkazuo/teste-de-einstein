class Regra {
    constructor(descricao, regra) {
        this._descricao = descricao;
        this._regra = regra;
    };

    valida(elementos) {
        let regex = this._tipoRegra();
        let atributos = this._regra.split(regex);

        let e1 = this._procuraElemento(atributos[0], elementos);
        let e2 = this._procuraElemento(atributos[1], elementos);

        if(e1 == null || e2 == null) return false;

        switch (regex) {
            case '/':
                if (e1.posicao + 1 == e2.posicao) {
                    return true;
                }
                break;
            case '//':
                if (e1.posicao < e2.posicao) {
                    return true;
                }
                break;
            case '=':
                if (e1.posicao == e2.posicao) {
                    return true;
                }
                break;    
        };
        return false;
    };

    _procuraElemento(atributo, elementos) {
        var encontrado = null;
        elementos.forEach(e => {
            if (e.atributos.includes(atributo)) {
                encontrado = e;
            }
        });
        return encontrado;
    };

    _tipoRegra() {
        let regex = /\/\//;
        if (this._regra.split(regex).length != 2) {
            regex = /\//;
            if (this._regra.split(regex).length != 2) {
                regex = /=/;
                if (this._regra.split(regex).length != 2) {
                    throw "Tipo de regra não reconhecido.";
                } 
            } 
        } 
        return this._regra.match(regex)[0];
    };
}