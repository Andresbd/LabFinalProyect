// eslint-disable
// this is an auto generated file. This will be overwritten

export const createTequilera = `mutation CreateTequilera($input: CreateTequileraInput!) {
  createTequilera(input: $input) {
    id
    name
    tequilas {
      items {
        id
        nombre
        anio
      }
      nextToken
    }
  }
}
`;
export const updateTequilera = `mutation UpdateTequilera($input: UpdateTequileraInput!) {
  updateTequilera(input: $input) {
    id
    name
    tequilas {
      items {
        id
        nombre
        anio
      }
      nextToken
    }
  }
}
`;
export const deleteTequilera = `mutation DeleteTequilera($input: DeleteTequileraInput!) {
  deleteTequilera(input: $input) {
    id
    name
    tequilas {
      items {
        id
        nombre
        anio
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
    anio
    marca {
      id
      name
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
    anio
    marca {
      id
      name
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
    anio
    marca {
      id
      name
      tequilas {
        nextToken
      }
    }
  }
}
`;
