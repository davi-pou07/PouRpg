class Personagem {
    constructor(id,nome,classe,cla,habEsp){
        this.id = id
        this.nome = nome
        this.classe = classe
        this.cla = cla
        this.vida = classe.vidaInicial
        this.abilidade = habEsp
    }
    
    ataqueBasico(id){
        var dano = this.getDano() 
        console.log("Inferindo ataque de ",dano)
        id.sofrerAtaque(dano)
    }

    habEsp(id){
        var dano = this.abilidade.dano
        console.log(`Liberando ataque ${this.abilidade.nome}`)
        console.log(`Inferindo ${this.abilidade.dano} de dano`)
        id.sofrerAtaque(dano)
    }

    contraAtaqueRapido(id){
        var percContraAtaque = 50
        var dano = (this.getDano() * percContraAtaque)/100
        console.log(`contra atacando com ${dano} de dano`)
        id.sofrerAtaque(dano)
    }

    sofrerAtaque(dano){
        var defesa = this.getDefesa()
        this.vida = this.vida - (dano-defesa)
        console.log(`Sofrendo ataque de ${dano}`)
        console.log(`Defendeu ${defesa}`)
        console.log(this.vida)
    }
    getDefesa(){
        var defesa = this.classe.defesaPadrao + this.cla.defesaAdicional
        return defesa
    }
    getDano(){
        var dano = this.classe.danoPadrao + this.cla.danoAdicional
        return dano
    }
}

var habEsp = {id:1,nome:"Ritmo de furia",dano:25,tempo:3}
var habEs2 = {id:1,nome:"Magia Rustica",dano:30,tempo:2}

var classe = {id:1,nome:"lutador",danoPadrao:17,defesaPadrao:5,vidaInicial:125}
var classe2 = {id:2,nome:"Mago",danoPadrao:14,defesaPadrao:2,vidaInicial:100}
var cla = {id:1,nome:"Bor",danoAdicional:5,defesaAdicional:2}
var cla2 = {id:2,nome:"shy",danoAdicional:9 ,defesaAdicional:3}
var Pou = new Personagem(1,'pou',classe,cla,habEsp)
var Pou2 = new Personagem(2,'poa',classe2,cla2,habEs2)

Pou.ataqueBasico(Pou2)
Pou2.ataqueBasico(Pou)

Pou.habEsp(Pou2)
Pou2.habEsp(Pou)

Pou.contraAtaqueRapido(Pou2)
Pou2.contraAtaqueRapido(Pou)