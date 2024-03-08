//Escreva um programa que inverta os caracteres de um string.

let word = prompt("Digite uma palavra:")

function wordReverse (word) {
  let newWord = []; //Criar um array para a nova palavra invertida 
  
  for (let i = 0; i < word.length; ++i) {
    if (word [i] != '')
        newWord.unshift(word[i])
  } 
  
  return alert(`Sua nova palavra é: ${newWord}`);
}

wordReverse(word)
