import React, {Component} from "react";
import styled from "./style.module.css";

class DicasHomerSimpson extends Component {

    constructor (props){
        super(props);
        this.state = {
            texto_frase: ''
        }
        this.frase = this.frase.bind(this);

        this.frases = ['Se algo é difícil de fazer, então não vale a pena ser feito!',
         'Tenho três filhos e nenhum dinheiro... Por que não posso ter nenhum filho e três dinheiros?',
         'Sei que nunca fui um homem muito religioso mas, se estiver aí em cima, por favor, me salve Super-Homem!', 
         'A culpa é minha e eu coloco ela em quem eu quiser!',
         'Bem, ele pode ter todo o dinheiro do mundo, mas tem uma coisa que ele não pode comprar... Um dinossauro!',
         'Álcool... A causa e a solução de todos os problemas.',
         'Existe três frases curtas que levarão sua vida adiante: "Não diga que fui eu!", "Oh, boa ieia, chefe!" e "Já estava assim quando cheguei."',
         'Nunca diga qualquer coisa a não ser que tenha certeza que todo mundo pensa o mesmo.',
         'Troque seu coração por um fígado, assim você bebe mais e se apaixona menos.',
         'Para mentir, apenas duas coisas são necessárias: lagém que minta e alguém que escute a mentira.',
         'Existem três jeitos de fazer as coisas: o jeito certo, o jeito errado, e o meu jeito, que é igual ao jeito errado, só que mais rápido.',
         'Tentar é o primeiro passa rumo ao fracasso.',
         'Lembre-se, se algo der errado, culpe o cara que não sabe falar inglês.',
         'É melhor ver coisas do que fazer coisas.']; /* todas as frases em array */
    
    }

    frase(){
        let state = this.state
        let numeroAleatorio = Math.floor(Math.random()* this.frases.length);
        state.texto_frase = this.frases[numeroAleatorio];
        this.setState(state);

      
    }

    render(){
        return (
            <div className={styled.container}>
                <img src={require('../../components/assets/simpson.jpeg')} alt="img-Simpson" className={styled.img}/>
                <Botao nome="Gerar Frase" acaoBtn={this.frase}/>
                <h3 className={styled.textoFrase}>{this.state.texto_frase}</h3>

            </div>
        );
    }
}

class Botao extends Component {
    render(){
        return (
            <div>
                <button onClick={this.props.acaoBtn} className={styled.btn} >{this.props.nome}</button>
            </div>
        );
    }
}
export default DicasHomerSimpson;