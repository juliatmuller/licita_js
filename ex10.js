function pagamento() {
     let nome = prompt("Digite seu nome : ");
      let bruto = prompt("Digite seu salario bruto : ");
      let liquido = bruto - 0.08;
      let desconto = bruto * 0.08;

      

     alert ("taxa de desconto do INSS é de 8% ");
    
     alert (" Nome do funcionario é: " + nome);
     alert (" Salário bruto do funcionario é: " + bruto);
     alert (" O desconto do INSS do funcionario é: " + desconto);
     alert (" O salário liquido do  funcionario é: " + liquido);

    } 
