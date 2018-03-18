# tedb-utils

## Install

```bash
npm install --save tedb-utils
```

* TeDB Utilities
    * range - create range of utf8 characters given two utf8 characters, or numbers descending/ascending
    * isEmpty - Return true if {}, [], "", null, undefined
    * rmArrObjDups - remove duplicate objects from an array. Only works for comparable `===` values
    * getPath - get the value given dot notated string path `"path.in.object"`
    * compressObj: - Convert object notation into dot object notation.
    * expandObj: - Convert dot string notated object into expanded object.
    * flattenArr: - Compress arrays of arrays into one array.
    * saveArrDups: - Save duplicated items in array of arrays.
    * getArrDups: - Compare two arrays and get only the duplicate items in new array.
    * rmArrDups: - Remove duplicate items in array.
    * addHours - Add a couple hours to a date object - will overlap days.
    * debounce - Debounce a method
    * findObjArrIndex - given an array of objects, the path to the index you wish to find, and the value to compare to. Find the index of the object in the array.
    * getObjValue - get the value given the path in the object
    * rmArrObjDups - Remove duplicate objects given - no nested search
    * setObjValue - set a given value to the given path of the object. 
range
```typescript
const numbers: number[] = range(-5, 5) as number[]; // have to specify - bc multiple possibilities
const strs: string[] = range("a", "b") as string[]; // utf8 range
```
isEmpty
```typescript
console.log(isEmpty([]) && isEmpty({}) && isEmpty("") && isEmpty(null) && isEmpty(undefined)); // true
```
rmObjDups
```typescript
const list = any[] = [
    {a: "a"}, {a: "a"}, {a: "b"}, {a: "c"}, {a: "c"}, {a: "b"}
];
const newList = rmObjDups(list, "a");
console.log(newList); // [{a: "a"}, {a: "b"}, {a: "c"}]
```
getPath
```typescript
const obj = {nested: {value: {is: {here: 3}}}};
console.log(getPath("nested.value.is.here")); // 3
```
compressObj
```typescript
const doc: any = { example: {obj: [1,2], is: "d"}, great: 9};
const target: any = {};
compressObj(doc, target);
console.log(target); 
// output
/*{
  "example.obj.0": 1,
  "example.obj.1": 2,
  "example.is": "d",
  "great": 9,
}*/
```
expandObj
```typescript
const doc = {
  "nested.reg.obj": 5,
  "nested.dot.0": 3,
  "nested.dot.1": 4,
  "is": "nested",
  "very.nested.obj.is.nested.far.in.obj": "hello";
}
const expanded = expandObj(doc);
console.log(expanded);
// output
/*{
  nested: {
      reg: {
        obj: 5,
      },
      dot: [3, 4],
  },
  is: "nested",
  very: {nested: {obj: {is: {nested: {far: {in: {
    obj: "hello",
  }}}}}}}
}*/
```
flattenArr
```typescript
const hArray = [[1,2], 3, [[[[4]],[5]]],[6,[[[7]]]]];
console.log(flattenArr(hArray)); // [1,2,3,4,5,6,7];
```
saveArrDups
```typescript
const dArray = [[1,2],[1],[23,4,1,2]];
saveArrDups(dArray)
    .then((res) => {
        console.log(res); // [1, 1, 1];
    });
```
getDups
```typescript
const da = [1, 2, 3];
const db = [2, 3, 5];
console.log(getDups(da, db)); // [2, 3];
```
rmArrDups
```typescript
const arrayD = [1, 1, 1, 2, 2, 3];
console.log(rmArrDups(arrayD)); // [1, 2, 3];
```  
addHours
```typescript
const today = new Date(); // 7:23 pm
addHours(today, 3); // 10:23 pm
```
debounce
```typescript
const fn = (a, b) => a + b;
debounce(fn(1, 2), 300); // 3 after 300ms 
```
findObjArrIndex
```typescript
const objArr = [{a: {b: 1}},{a: {b: 2}}];
findObjArrIndex(objArr, 'a.b', 2); // index 1
```
getObjValue
```typescript
const obj = {a: 'string', b: {nested: 3}};
getObjValue(obj, 'b.nested'); // 3
```
rmArrObjDups
```typescript
const objs = [{a: 1},{a: 1},{a: 2},{a: 2}];
rmArrObjDups(obj, 'a'); // [{a: 1},{a: 2}];
```
setObjValue
```typescript
const obj = {a: {nested: {next: 'str'}}};
setObjValue(obj, 'a.nested.next', 3); 
// {a: {nested: {next: 3}}}
```
## License
See [License](LICENSE)
