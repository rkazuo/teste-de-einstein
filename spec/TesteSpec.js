describe("Regras", () => {
    it("Quando é verdade que elemento está exatamente ao lado", () => {
        let regra1 = new Regra("A casa Verde fica do lado esquerdo da casa Branca.","cor:Verde/cor:Branca");
        let elemento1 = new Elemento(1,["cor:Verde"]);
        let elemento2 = new Elemento(2,["cor:Branca"]);
        let elemento3 = new Elemento(3,["cor:Azul"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(true);
    });

    it("Quando é mentira que elemento está exatamente ao lado", () => {
        let regra1 = new Regra("A casa Verde fica do lado esquerdo da casa Branca.","cor:Verde/cor:Branca");
        let elemento1 = new Elemento(1,["cor:Verde"]);
        let elemento2 = new Elemento(2,["cor:Azul"]);
        let elemento3 = new Elemento(3,["cor:Branca"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(false);
    });

    it("Quando é verdade que elemento está em um lado", () => {
        let regra1 = new Regra("A casa Verde fica em algum lugar do lado esquerdo da casa Branca.","cor:Verde//cor:Branca");
        let elemento1 = new Elemento(1,["cor:Verde"]);
        let elemento2 = new Elemento(2,["cor:Azul"]);
        let elemento3 = new Elemento(3,["cor:Branca"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(true);
    });

    it("Quando é mentira que elemento está em um lado", () => {
        let regra1 = new Regra("A casa Verde fica em algum lugar do lado esquerdo da casa Branca.","cor:Verde//cor:Branca");
        let elemento1 = new Elemento(1,["cor:Branca"]);
        let elemento2 = new Elemento(2,["cor:Azul"]);
        let elemento3 = new Elemento(3,["cor:Verde"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(false);
    });

    it("Quando é verdade que características de um elemento coincide", () => {
        let regra1 = new Regra("O Inglês vive na casa Vermelha","nacionalidade:Inglês=cor:Vermelha");
        let elemento1 = new Elemento(1,["cor:Verde","bebida:Chá"]);
        let elemento2 = new Elemento(2,["cor:Vermelha","nacionalidade:Inglês"]);
        let elemento3 = new Elemento(3,["cor:Branca","nacionalidade:Sueco"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(true);
    });

    it("Quando é mentira que características de um elemento coincide", () => {
        let regra1 = new Regra("O Inglês vive na casa Vermelha","nacionalidade:Inglês=cor:Vermelha");
        let elemento1 = new Elemento(1,["cor:Verde","bebida:Chá"]);
        let elemento2 = new Elemento(2,["cor:Vermelha","nacionalidade:Sueco"]);
        let elemento3 = new Elemento(3,["cor:Branca","nacionalidade:Inglês"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(false);
    });

});

describe("Teste de Lógica", () => {
    it("Deve criar quantidade de elementos", () => {
        let atributos = {
            "cor":["Amarela","Azul","Branca","Verde","Vermelha"],
            "nacionalidade":["Alemão","Dinamarquês","Inglês","Norueguês","Sueco"],
            "bebida":["Água","Café","Cerveja","Chá","Leite"],
            "cigarro":["Blends","Bluemaster","Dunhill","Pall Mall","Prince"],
            "animal":["Cachorro","Cavalo","Gato","Pássaro","Peixe"],
        }
    })
});