function falarDepoisde(segundo, frase) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(frase);
      }, segundo * 1000);
    });
  }
  
  falarDepoisde(2, "ola!")
    .then((frase) => frase.concat("?!?"))
    .then((outraFrase) => console.log(outraFrase))
    .catch((e) => console.log(e));