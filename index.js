let estado;
let op1;
let op2;
let resultado;
let operacao;


let calculadora = {
    numeroArray : new Array(),
    
    inicializacao : function(){
        estado='inicializacao';
        this.display();
    },
    
    adicao : function adicao() {
        operacao = 'adicao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    subtracao : function(){
        operacao = 'subtracao';
        estado='operando2';
        this.numeroArray=[]; 
    },
    
    divisao : function (){
        operacao = 'divisao';
        estado='operando2';
        this.numeroArray=[];
    },
    
    multiplicacao : function (){
        operacao = 'multiplicacao';
        estado='operando2';
        this.numeroArray=[]; 
    },

    ac : function(){
        calculadora.inicializacao();
        this.numeroArray=[];
    },
    
    del : function(){
        calculadora.inicializacao();
        this.numeroArray.pop();
       
    },
    
    igual : function(){
        switch (operacao){
            
            case 'adicao':
            resultado = op1+op2;
            estado ='resultado';
            this.display();
            break;

            case 'subtracao':
            resultado = op1-op2;
            estado ='resultado';
            this.display();
            break;

            case 'divisao':
            resultado = op1/op2;
            estado ='resultado'
            this.display();
            break;

            case 'multiplicacao':
            resultado = op1*op2;
            estado ='resultado'
            this.display();
            break;
            
        }
            
    },
    display : function (){
        switch (estado){

            case'inicializacao':
                document.getElementById("display").innerText = '0';
                estado='operando1';
                break;

            case 'operando1':
                document.getElementById("display").innerText = op1;
                break;
            
            case 'operando2':
                document.getElementById("display").innerText = op2;
                break;
            
            case 'resultado':
                document.getElementById("display").innerText = resultado;
                estado='operando1';
                break;
        }

    },
  
    
    proximoNumero: function(digito){
                    switch (estado){
                        case'operando1':
                            this.numeroArray.push(digito);
                            op1=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                        case 'operando2':
                            this.numeroArray.push(digito);
                            op2=parseFloat(this.numeroArray.join(''));
                            this.display();
                            break
                    }


    },

}