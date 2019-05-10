// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTequilera = `mutation CreateTequilera($input: CreateTequileraInput!) {
  createTequilera(input: $input) {
    id
    nombre
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        sku
      }
      nextToken
    }
  }
}
`;
export const updateTequilera = `mutation UpdateTequilera($input: UpdateTequileraInput!) {
  updateTequilera(input: $input) {
    id
    nombre
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        sku
      }
      nextToken
    }
  }
}
`;
export const deleteTequilera = `mutation DeleteTequilera($input: DeleteTequileraInput!) {
  deleteTequilera(input: $input) {
    id
    nombre
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        sku
      }
      nextToken
    }
  }
}
`;
export const createTequilas = `mutation CreateTequilas($input: CreateTequilasInput!) {
  createTequilas(input: $input) {
    id
    nombre
    color
    aroma
    sabor
    desc
    image
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
  }
}
`;
export const updateTequilas = `mutation UpdateTequilas($input: UpdateTequilasInput!) {
  updateTequilas(input: $input) {
    id
    nombre
    color
    aroma
    sabor
    desc
    image
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
  }
}
`;
export const deleteTequilas = `mutation DeleteTequilas($input: DeleteTequilasInput!) {
  deleteTequilas(input: $input) {
    id
    nombre
    color
    aroma
    sabor
    desc
    image
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
  }
}
`;
