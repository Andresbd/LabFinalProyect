// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTequilera = `query GetTequilera($id: ID!) {
  getTequilera(id: $id) {
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
export const listTequileras = `query ListTequileras(
  $filter: ModelTequileraFilterInput
  $limit: Int
  $nextToken: String
) {
  listTequileras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      tequilas {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getTequilas = `query GetTequilas($id: ID!) {
  getTequilas(id: $id) {
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
export const listTequilass = `query ListTequilass(
  $filter: ModelTequilasFilterInput
  $limit: Int
  $nextToken: String
) {
  listTequilass(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nombre
      anio
      marca {
        id
        name
      }
    }
    nextToken
  }
}
`;
