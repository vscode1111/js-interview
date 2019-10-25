const noUnique = ['a', 'b', 'c', 'c', 'b', 'd'];
console.log(noUnique);
const unique = noUnique.filter((x, i, a) => a.indexOf(x) == i);
console.log(unique);