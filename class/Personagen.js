class acao{
    ataqueBasico(inimigo,dano){
        console.log("Inferindo ataque de ",dano)
        inimigo.acao.sofrerAtaque(inimigo,dano)
    }

    habEsp(inimigo,habilidade){
        console.log(`Liberando ataque ${habilidade.nome}`)
        console.log(`Inferindo ${habilidade.dano} de dano`)
        inimigo.acao.sofrerAtaque(inimigo,habilidade.dano)
    }

    contraAtaqueRapido(inimigo,dano){
        var percContraAtaque = 50
        var dano = (dano * percContraAtaque)/100
        console.log(`contra atacando com ${dano} de dano`)
        inimigo.acao.sofrerAtaque(inimigo,dano)
    }

    sofrerAtaque(inimigo,dano){
        var defesa = inimigo.getDefesa()
        inimigo.vida = inimigo.vida - (dano-defesa)
        console.log(`Defendeu ${defesa} de ${dano}`)
        console.log(`Vida atual:${inimigo.vida}`)
    }
}



class Personagem {
    constructor(id,nome,classe,cla,habEsp){
        this.id = id
        this.nome = nome
        this.classe = classe
        this.cla = cla
        this.vida = classe.vidaInicial
        this.habilidade = habEsp
        this.acao = new acao()
    }
    
    getDefesa(){
        var defesa = this.classe.defesaPadrao + this.cla.defesaAdicional
        return defesa
    }
    getDano(){
        var dano = this.classe.danoPadrao + this.cla.danoAdicional
        return dano
    }

    getStatus(){
        if (this.vida <= 0) {
            return false
        } else {
            return true
        }
    }
}

class HabilidadeEspecial{
    constructor(id,nome,dano,tempo){
        this.id = id
        this.nome = nome
        this.dano = dano
        this.tempo = tempo
    }
}

class Classe{
    constructor(id,nome,danoPadrao,defesaPadrao,vidaInicial){
        this.id = id
        this.nome = nome
        this.danoPadrao = danoPadrao
        this.defesaPadrao = defesaPadrao
        this.vidaInicial = vidaInicial
    }
}

class Cla{
    constructor(id,nome,danoAdicional,defesaAdicional){
        this.id = id
        this.nome = nome
        this.danoAdicional = danoAdicional
        this.defesaAdicional = defesaAdicional
    }
}

var habEsp = new HabilidadeEspecial(1,"Ritmo de furia",25,3) 
var habEs2 = new HabilidadeEspecial(2,"Magia Rustica",30,2)

var classe = new Classe(1,"lutador",17,5,125)
var classe2 =  new Classe(2,"Mago",14,2,100)

var cla = new Cla(1,"Bor",5,2)
var cla2 = new Cla(2,"shy",9,3)

var Pou = new Personagem(1,'Garen',classe,cla,habEsp)
var Pou2 = new Personagem(2,'Lux',classe2,cla2,habEs2)

import prompt from 'prompt-sync'
const pro = prompt()



const game = {
    players: [Pou,Pou2],
    step: 1,
    game:true
}
var x = 0
while(game.game){
    
    var y = x+1
    console.log("Iniciando step" + game.step)
    var player = game.players[x]
    var inimigo = game.players[y]
    if (inimigo == undefined) {
        y = x - 1
        inimigo = game.players[y]
    }
    if (player != undefined) {
        var distance = pro(`O que deseja fazer com ${inimigo.nome}? ${player.nome} `);
        switch (distance) {
            case 'a':
                player.acao.ataqueBasico(inimigo,player.getDano())
                x++
                game.step++

                break;
            case 'h':
                player.acao.habEsp(inimigo,player.habilidade)
                x++
                game.step++
                break;
            case 'stop':
            game.game = false

            default:
                x++
                game.step++
                break;
        }

    } else {
        x = 0
    }
}