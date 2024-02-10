import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from "uuid";

export  const BRANDS_SEED: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createAtr: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Honda',
        createAtr: new Date().getTime()
      },
      {
        id: uuid(),
        name: 'VolskWagen',
        createAtr: new Date().getTime()
      }

  ]