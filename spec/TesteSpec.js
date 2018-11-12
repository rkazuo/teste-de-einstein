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

    it("Regra deixa de ser verdade", () => {
        let regra1 = new Regra("A casa Verde fica do lado esquerdo da casa Branca.","cor:Verde/cor:Branca");
        let elemento1 = new Elemento(1,["cor:Verde"]);
        let elemento2 = new Elemento(2,["cor:Branca"]);
        let elemento3 = new Elemento(3,["cor:Azul"]);
        let elementos = [elemento1, elemento2, elemento3];
        expect(regra1.valida(elementos)).toEqual(true);
        elemento1.set("cor:Vermelha");
        expect(regra1.valida(elementos)).toEqual(false);
    });
});

describe("Elementos", () => {
    it("Informar um novo atributo", () => {
        let elemento = new Elemento(1,[]);
        elemento.set("cor:Verde");
        expect(elemento.get("cor")).toEqual("cor:Verde");
    });
    it("Alterar um atributo existente", () => {
        let elemento = new Elemento(1,[]);
        elemento.set("cor:Verde");
        elemento.set("cor:Vermelho");
        expect(elemento.get("cor")).toEqual("cor:Vermelho");
    });
    it("Alterar de volta um atributo existente", () => {
        let elemento = new Elemento(1,[]);
        elemento.set("cor:Verde");
        elemento.set("cor:Vermelho");
        elemento.set("cor:Verde");
        expect(elemento.get("cor")).toEqual("cor:Verde");
    });
});

describe("Teste de Lógica", () => {
    it("Teste deve criar seus elementos", () => {
        let posicoes = 5
        let teste = new Teste(posicoes, []);
        expect(teste.elementos.length).toEqual(5);
        
    })

    it("Teste concluído se atender todas as regras", () => {
        let posicoes = 5
        let regra1 = new Regra("O Inglês vive na casa Verde","nacionalidade:Inglês=cor:Verde");
        let regra2 = new Regra("A casa Verde fica do lado esquerdo da casa Branca.","cor:Verde/cor:Branca");
        let regras = [regra1, regra2];

        let teste = new Teste(posicoes, regras);
        teste.valor(1,"nacionalidade:Inglês")
        teste.valor(1,"cor:Verde")
        teste.valor(2,"cor:Branca")
        teste.valor(3,"cor:Azul")
        expect(teste.concluido()).toEqual(true);
        
    })
    it("Teste não concluído se não atender todas as regras", () => {
        let posicoes = 5
        let regra1 = new Regra("O Inglês vive na casa Verde","nacionalidade:Inglês=cor:Verde");
        let regra2 = new Regra("A casa Verde fica do lado esquerdo da casa Branca.","cor:Verde/cor:Branca");
        let regras = [regra1, regra2];

        let teste = new Teste(posicoes, regras);
        teste.valor(1,"nacionalidade:Inglês")
        teste.valor(1,"cor:Verde")
        teste.valor(2,"cor:Azul")
        teste.valor(3,"cor:Branca")
        expect(teste.concluido()).toEqual(false);
        
    })
});