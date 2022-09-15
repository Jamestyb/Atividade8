function Calsom(){

    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;

    
    let soma = Number(num2) + Number(num1);





   document.getElementsByName("somado")[0].value = soma;

    }
    function calcsub(){

        let num1 = document.getElementsByName("num1")[0].value;
        let num2 = document.getElementsByName("num2")[0].value;


        let subtracao = Number(num1) - Number(num2);

        document.getElementsByName("somado")[0].value = subtracao;




    }

    function calcdiv(){


        let num1 = document.getElementsByName("num1")[0].value;
        let num2 = document.getElementsByName("num2")[0].value;


        let div = Number(num1) / Number(num2);

        document.getElementsByName("somado")[0].value = div;





    }


    function calcmult(){

        let num1 = document.getElementsByName("num1")[0].value;
        let num2 = document.getElementsByName("num2")[0].value;


        let mult = Number(num1) * Number(num2);

        document.getElementsByName("somado")[0].value = mult;

        




    }
    