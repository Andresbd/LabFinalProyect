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
        fechaProduccion
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
        fechaProduccion
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
        fechaProduccion
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
    fechaProduccion
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
    belongs {
      id
      user
      fechaCompra
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
    fechaProduccion
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
    belongs {
      id
      user
      fechaCompra
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
    fechaProduccion
    sku
    tequilera {
      id
      nombre
      tequilas {
        nextToken
      }
    }
    belongs {
      id
      user
      fechaCompra
      tequilas {
        nextToken
      }
    }
  }
}
`;
export const createHistorial = `mutation CreateHistorial($input: CreateHistorialInput!) {
  createHistorial(input: $input) {
    id
    user
    fechaCompra
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        fechaProduccion
        sku
      }
      nextToken
    }
  }
}
`;
export const updateHistorial = `mutation UpdateHistorial($input: UpdateHistorialInput!) {
  updateHistorial(input: $input) {
    id
    user
    fechaCompra
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        fechaProduccion
        sku
      }
      nextToken
    }
  }
}
`;
export const deleteHistorial = `mutation DeleteHistorial($input: DeleteHistorialInput!) {
  deleteHistorial(input: $input) {
    id
    user
    fechaCompra
    tequilas {
      items {
        id
        nombre
        color
        aroma
        sabor
        desc
        image
        fechaProduccion
        sku
      }
      nextToken
    }
  }
}
`;
