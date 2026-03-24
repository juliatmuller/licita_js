function desconto(){


     let bruto = parseFloat(prompt("Digite o salário:"));
        let liquido;
      let desconto;

      if (bruto <= 1000){
        liquido = bruto - (bruto * 0.08);
desconto = bruto * 0.08;
      } else if (bruto <= 1500){
       liquido = bruto - (bruto * 0.085);
desconto = bruto * 0.085;
      } else {
        liquido = bruto - (bruto * 0.09);
desconto = bruto * 0.09;
      }
                

                alert ("Seu salário é o valor de: " + bruto);
                alert (" O desconto do INSS é: " + desconto);
                alert (" O salário liquido é: " + liquido);

    
}