function calcularDano(ataque, defesa, temEscudo) {
    if (temEscudo) {
      return (ataque - defesa) / 2
    } else {
      return ataque - defesa
    }
  }
  
  
  function aplicarDano(vida, dano) {
    return vida - dano
  }
  
  
  function exibirResultado(ataque, defesa, vida, nomeAtacante, nomeDefensor, temEscudo) {
    let dano = calcularDano(ataque, defesa, temEscudo)
  
    if (dano > 0) {
      vida = aplicarDano(vida, dano)
      if (temEscudo) {
        alert(`${nomeAtacante} atacou. ${nomeDefensor} sofreu ${dano} de dano por ter escudo. Sua vida agora é ${vida}.`)
      } else if (temEscudo == false){
        alert(`${nomeAtacante} atacou. ${nomeDefensor} sofreu ${dano} de dano e não possui escudo. Sua vida agora é ${vida}.`)
      }
    } else {
      alert(`${nomeAtacante} atacou, mas não afetou ${nomeDefensor}. Nenhum dano causado!`)
    }
  
  }
  
  
  const nomeChar1 = prompt('Digite o nome do personagem:')
  const ataqueChar1 = parseInt(prompt('Digite o poder de ataque deste personagem :'))

 
  const nomeChar2 = prompt('Digite o nome de outro personagem:')
  let pontosVidaChar2 = parseInt(prompt('Digite a quantidade de pontos de vida esse personagem tem :'))
  const defesaChar2 = parseInt(prompt('Digite o valor do poder de defesa deste personagem:'))
  let escudo = prompt('o personagem a ser atacado tem escudo?')
  if(escudo == 'sim'){
    escudo = true
    calcularDano(ataqueChar1, defesaChar2, escudo)
  } else if (escudo == 'nao'){
    escudo = false
    calcularDano(ataqueChar1, defesaChar2, escudo)
  }


exibirResultado(ataqueChar1, defesaChar2, pontosVidaChar2, nomeChar1, nomeChar2, escudo)