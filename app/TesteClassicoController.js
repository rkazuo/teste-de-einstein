class TesteClassicoController {
    constructor() {
        this._tamanho = 5
        this._cores = ["Cor:Amarela","Cor:Azul","Cor:Branca","Cor:Verde","Cor:Vermelha"];
        this._nacionalidade = ["Nacionalidade:Alemão","Nacionalidade:Dinamarquês","Nacionalidade:Inglês","Nacionalidade:Norueguês","Nacionalidade:Sueco"];
        this._bebida = ["Bebida:Água","Bebida:Café","Bebida:Cerveja","Bebida:Chá","Bebida:Leite"];
        this._cigarro = ["Cigarro:Blends","Cigarro:Bluemaster","Cigarro:Dunhill","Cigarro:Pall Mall","Cigarro:Prince"];
        this._animal = ["Animal:Cachorro","Animal:Cavalo","Animal:Gato","Animal:Pássaro","Animal:Peixe"];
        this._dicas = this._criaDicas();
        this._teste = new Teste(this._tamanho,this._dicas);
        this.montaTabelaSolucao();
        this.atualizaDicas();
    }

    _criaDicas() {
        let dicas = [];
        dicas.push(new Regra("O Inglês vive na casa Vermelha.","Cor:Vermelha=Nacionalidade:Inglês"));
        dicas.push(new Regra("O Sueco tem Cachorros como animais de estimação.","Nacionalidade:Sueco=Animal:Cachorro"));
        dicas.push(new Regra("O Dinamarquês bebe Chá.","Nacionalidade:Dinamarquês=Bebida:Chá"));
        dicas.push(new Regra("A casa Verde fica do lado esquerdo da casa Branca.","Cor:Verde/Cor:Branca"));
        dicas.push(new Regra("O homem que vive na casa Verde bebe Café.","Cor:Verde=Bebida:Café"));
        dicas.push(new Regra("O homem que fuma Pall Mall cria Pássaros.","Cigarro:Pall Mall=Animal:Pássaro"));
        dicas.push(new Regra("O homem que vive na casa Amarela fuma Dunhill.","Cor:Amarela=Cigarro:Dunhill"));
        dicas.push(new Regra("O homem que vive na casa do meio bebe Leite.","3=Bebida:Leite"));
        dicas.push(new Regra("O Norueguês vive na primeira casa.","1=Nacionalidade:Norueguês"));
        dicas.push(new Regra("O homem que fuma Blends vive ao lado do que tem Gatos.","Cigarro:Blends|Animal:Gato"));
        dicas.push(new Regra("O homem que cria Cavalos vive ao lado do que fuma Dunhill.","Animal:Cavalo|Cigarro:Dunhill"));
        dicas.push(new Regra("O homem que fuma Bluemaster bebe Cerveja.","Cigarro:Bluemaster=Bebida:Cerveja"));
        dicas.push(new Regra("O Alemão fuma Prince.","Nacionalidade:Alemão=Cigarro:Prince"));
        dicas.push(new Regra("O Norueguês vive ao lado da casa Azul.","Nacionalidade:Norueguês|Cor:Azul"));
        dicas.push(new Regra("O homem que fuma Blends é vizinho do que bebe Água.","Cigarro:Blends|Bebida:Água"));
        return dicas;
    }
    atualizaDicas() {
        document.getElementById("dicas").innerHTML = `
            <ul>
                ${this._dicas.map( d => `
                    <li>
                        <label>
                            <input class="chkDica" type="checkbox" disabled="true" ${d.valida(this._teste.elementos) ? "checked" : ""}  />
                            <span>${d.descricao}</span>
                        </label>
                    </li>
                `).join('')}                
            </ul>
        `;
    }
    montaTabelaSolucao() {
        let valores = [this._cores,this._nacionalidade,this._bebida,this._cigarro,this._animal];
        var i = -1;
        document.getElementById("solucao").innerHTML = `
        <div class="row">
            <div class="col s2">Casa</div>
            <div class="col s2">1</div>
            <div class="col s2">2</div>
            <div class="col s2">3</div>
            <div class="col s2">4</div>
            <div class="col s2">5</div>
        </div>  
        ${valores.map(atributo => `
        <div class="row">
            <div class="col s2">${atributo[0].split(/:/)[0]}</div>
            ${atributo.map( (v,index,arr) => `
                <div class="input-field col s2">
                    <select onchange="c.testaRegras(${index+1},this);">
                        <option value="${atributo[0].split(/:/)[0]}:"></option>
                        ${atributo.map( a => `
                            <option value="${a}">${a.split(/:/)[1]}</option>
                        `).join('')}
                    </select>
                    
                </div>
            `).join('')}
            
        </div>
            
        `).join('')}                
        `;

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, []);
        });

    }

    testaRegras(posicao,control) {
        this._teste.valor(posicao,control.value);
        this.atualizaDicas();
        if (this.verificaConclusao()) alert("Parabéns! Você conseguiu!");
    }

    verificaConclusao() {
        let dicas = document.getElementsByClassName("chkDica");
        for (let i=0; i < dicas.length; i++) {
            if (!dicas[i].checked) return false;
        }
        
        return true;
    }

}