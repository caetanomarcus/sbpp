export const cepMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1') // captura 3 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  export const rgMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4')
      .replace(/(-\d{1})\d+?$/, '$1')
  }

  export const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  export const dateMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
      .replace(/([/]\d{4})\d+?$/, '$1')
    
  }

  export const phoneMask = value => {
    if(value.length >= 14) {
      return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    } else {
      return value
        .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
        .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
  }

  export const agencyMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{4})(\d{1})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1')
  }

  export const accountMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{5})(\d{1})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1')
  }

  export const cidMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{1})(\d{3})(\d{1})(\d{3})/, '$1.$2-$3.$4')
  }