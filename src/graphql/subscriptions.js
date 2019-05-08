// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTequilera = `subscription OnCreateTequilera {
  onCreateTequilera {
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
export const onUpdateTequilera = `subscription OnUpdateTequilera {
  onUpdateTequilera {
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
export const onDeleteTequilera = `subscription OnDeleteTequilera {
  onDeleteTequilera {
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
export const onCreateTequilas = `subscription OnCreateTequilas {
  onCreateTequilas {
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
export const onUpdateTequilas = `subscription OnUpdateTequilas {
  onUpdateTequilas {
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
export const onDeleteTequilas = `subscription OnDeleteTequilas {
  onDeleteTequilas {
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
