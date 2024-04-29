[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/K79_wlsf)
# Callbacks, Promeses i Async/Await

A JS existeixen diverses maneres de gestionar la asincronia. Principalment:
|Mètode|Descripció
|---|---|
|Mitjançant **callbacks**|Probablement, la forma més clàssica de gestionar l'asincronia en Javascript.
|Mitjançant **promeses**|Una forma més moderna i actual de gestionar l'asincronia.
|Mitjançant **async/await**|Seguim amb promeses, però amb async/await afegim sucre sintàctic.

## Recursos a revisar:

- [Callbacks, Promesas y Asincronía en Javascript](https://www.freecodecamp.org/espanol/news/sincrono-vs-asincrono-en-javascript/)

- [Cómo usar Asnyc / Await](https://www.freecodecamp.org/espanol/news/como-usar-async-await-para-escribir-un-codigo-mejor-en-javascript/)

- [General d'Asincronia a JS](https://lenguajejs.com/javascript/asincronia/que-es/)

### A. Utilitzant Callbacks

En aquest exercici, treballareu amb una funció anomenada `findOne` que busca un element en una llista d'usuaris. Aquesta funció fa servir callbacks per gestionar els resultats de la cerca.

La funció `findOne` rep tres arguments:

- `list`: una llista d'usuaris. Cada usuari és un objecte amb propietats `name` i `rol`.
- `query`: un objecte amb dues propietats, `key` i `value`. La funció buscarà un usuari que tingui un valor `value` per a la propietat `key`.
- `callbacks`: un objecte amb dues funcions, `onSuccess` i `onError`. Si es troba un usuari que compleixi la consulta, es cridarà `onSuccess` amb aquest usuari. Si no es troba cap usuari, es cridarà `onError` amb un missatge d'error.

La funció `findOne` fa servir `setTimeout` per simular una operació asincrònica que triga 2 segons a completar-se.

El vostre objectiu és implementar aquesta funció i les funcions de callback `onSuccess` i `onError`.

Aquí teniu un exemple de com es crida a la funció `findOne`:

```javascript
...

const users = [
    {
        name: 'Carlos',
        rol: 'Teacher',
    },
    {
        name: 'Ana',
        rol: 'Boss',
    },
];

console.log('findOne success');
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
```

El codi que ha de fer servir callbacks per dur a terme una tasca després de cercar un element en un array amb la funció find. Modifica **ex_a.js** i AFEGEIX ELS COMENTARIS QUE EXPLIQUEN I T'AJUDEN A ENTENDRE cada línia de codi i destaca l'ús del callback i el valor mostrat per pantalla.

### B. Utilitzant Promeses

Crea un arxiu **ex_b.js**. Modifica el codi anterior per eliminar els **callbacks** i utilitzar en el seu lloc **promeses**. Hauràs de crear-les dins de la funció `findOne` i consumir-les al codi principal utilitzant les paraules reservades `then` i `catch`. Documenta les línies de codi, explicant quins canvis has realitzat.

### c. Utilitzant Async/Await

Crea un arxiu **ex_c.js**. Modifica el codi anterior per fer servir **async/await**. És possible que hagis de crear una funció addicional per gestionar la funció async. Explica línia a línia quins canvis has realitzat directament dins del codi.

### d. Versió Paral·lela amb Promeses i Async/Await

Crea un arxiu **ex_d.js**. El codi obtingut un cop fem ús de **async/await** es torna seqüencial. No t'has preguntat si existeix alguna manera de fer peticions de manera simultània sense haver d'esperara que acabi una per començar un altra però que globalment requerim que totes elles acabin resolent-se per retornar la promesa? Tracta de trobar de quina manera es gestiona això i intenta, amb el mateix codi, de trobar com seria la versió paral·lela utilitzant promeses i async/await, de manera que TOTES LES CRIDES A LA FUNCIÓ `findOne` S'EXECUTIN SIMULTÀNIAMENT, sense haver d'esperar que finalitzi la primera per executar la segona.
