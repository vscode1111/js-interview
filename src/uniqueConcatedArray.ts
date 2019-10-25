const a = ['a', 'b', 'c'];
const b = ['c', 'd', 'e'];

const getUniqueConcatedArray = (a: Array<any>, b: Array<any>): Array<any> => {
  return a.concat(b.filter(bi => !a.some(ai => ai === bi)));
}

const c = getUniqueConcatedArray(a, b);
// const c = b.filter(i => !a.some(i));
console.log(a, b);
console.log(c);

