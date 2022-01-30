const object = {
  somewhere: {
    deep: {
      inside: 3,
      array: [1, 2, 3, 4]
    },
    bar: 2
  },
  foo: 1
};

let nextObject = {
  ...object,
  somewhere: {
    ...object.somewhere,
    deep: {
      ...object.somewhere.deep,
      inside: 4
    }
  }
};

console.log(object, nextObject);
console.log(object === nextObject);