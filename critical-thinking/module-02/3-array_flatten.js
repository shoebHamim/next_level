const input_val=['am',['jam'],'kathal',[4,5,6,[7,8,9,4,5,10]]]

const result=input_val.flat(Infinity)


console.log([...new Set(result)]);

