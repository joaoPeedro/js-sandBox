const deepCopyFunction = (objectToCopy) => {
    let value, key;
  
    if (typeof objectToCopy !== 'object' || objectToCopy === null) {
      return objectToCopy;
    }
  
    const objectCopied = Array.isArray(objectToCopy) ? [] : {};
  
    for (key in objectToCopy) {
      value = objectToCopy[key];
        console.log({value, objectCopied });
  
      objectCopied[key] = deepCopyFunction(value);
    }
  
  
    return objectCopied;
  };
  
  
  
  let arrTest = ['arrTest', 'arrTest1', 'arrTest2']
  
  deepCopyFunction(arrTest);
  
  
  const persons = [{name: "augusto", age: 35}, {name: "manual", age:88}]
  //sem o map vai só duplicar o array e a ref dos objs é a mesma, logo não iriamos copiar os obj's
  const copiedPersons = [...persons.map(person => ({person: person.name, age: person.age}))]
  
  console.log(persons, copiedPersons )