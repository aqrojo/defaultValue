# defaultValue
Helper function to return a default value when the provided value is not defined

A menudo sucede que un valor puede no estar definido y al intentar acceder a una de sus propiedades javascript da error

Esta utilidad previene el problema, devolviendo además un valor seguro en caso de fallar, veamos un ejemplo:
```
const itemList = {
    creationDate: '03-07-2020',
    creator: 'John Foo',
    collection: [
        {id: 1, value: 10},
        {id: 2, value: 20},
    ]
}
```

Para acceder a collection, normalmente hacemos lo siguiente:
```
const collection = itemList.collection
```

Esto puede fallar si itemList no existe o si itemList.collection no existe, así que para hacerlo de forma segura:
````
const collection = itemList && itemList.collection
````

La situación crece a medida que la profundidad del objeto se incrementa y más en el caso de querer devolver un valor por defecto:
````
const firstItemValue = itemList &&
                       itemList.collection && 
                       itemList.collection.length > 0 &&
                       itemList.collection[0].value ||
                       -1
````

La función `defaultValue` lo resuelve devolviendo undefined por defecto o un valor opcional que definamos como tercer parámetro  
````
const firstItemValue = defaultValue('collection.0.value', itemList, -1)
````

