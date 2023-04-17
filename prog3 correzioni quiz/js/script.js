/*DOMANDA 5*/
console.log('**DOMANDA 5');
const arr1 = [8];
const arr2 = [1, 2, 3];
console.log(arr1);
console.log(arr2);
arr1.push(arr2);
console.log(arr1);
console.log('last: ' + arr1.pop() + 'length: ' + arr1.length);

/*DOMANDA 6 */
console.log('**DOMANDA 6');
const student = {
    name: 'Diego',
    surname: 'Bolivar',
    age: 18
};
const { name, age = 20 } = student;
console.log(age);
console.log(student);
console.log(name);
console.log(student.surname);

/*DOMANDA 10 */
console.log('**DOMANDA 10');
const colors = ['red', 'blue', 'white']
console.log(colors[2]);

/*DOMANADA 11 */
console.log('**DOMANDA 11');
let b = 10;
let c = 5;
if (b = c) {
    console.log('True');
} else {
    console.log('False');
}

/*DOMANDA 15 */
console.log('**DOMANDA 15');
for (let i = 0; i <= 4; i++) {
    let sum = 0;
    sum = sum + i;
    console.log(sum);
}

/*DOMANDA 17 */
console.log('**DOMANDA 17');
var select = function () {
    var selectAll = document.getElementsByTagName('body')[0];
    selectAll.style.backgroundColor = 'red';
}
select();

/*DOMANDA 19 */
console.log('**DOMANDA 19');
const myFunction = (x, y) =>  {
    while (x < y) {
        x += 1;
        console.log(x);
    }
}
myFunction(1, 101);

/*DOMANDA 23 */
console.log('**DOMANDA 23');

console.log('x= ' + x);
var x = 1;

