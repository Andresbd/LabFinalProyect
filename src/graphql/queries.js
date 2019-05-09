// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTequilera = `query GetTequilera($id: ID!) {
  getTequilera(id: $id) {
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
export const listTequileras = `query ListTequileras(
  $filter: ModelTequileraFilterInput
  $limit: Int
  $nextToken: String
) {
  listTequileras(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nombre
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
export const listTequilass = `query ListTequilass(
  $filter: ModelTequilasFilterInput
  $limit: Int
  $nextToken: String
) {
  listTequilass(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
