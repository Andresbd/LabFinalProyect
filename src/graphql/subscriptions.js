// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTequilera = `subscription OnCreateTequilera {
  onCreateTequilera {
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
export const onUpdateTequilera = `subscription OnUpdateTequilera {
  onUpdateTequilera {
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
export const onDeleteTequilera = `subscription OnDeleteTequilera {
  onDeleteTequilera {
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
export const onCreateTequilas = `subscription OnCreateTequilas {
  onCreateTequilas {
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
export const onUpdateTequilas = `subscription OnUpdateTequilas {
  onUpdateTequilas {
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
export const onDeleteTequilas = `subscription OnDeleteTequilas {
  onDeleteTequilas {
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
