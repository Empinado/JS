let obj = {
    animal: 'dog'
}
let obj2 = obj;

obj = null;

console.log(obj);
console.log(obj2);

//Если создать объект и перменную, которая на него ссылается, то объект нельзя удалить/обнулить пока не будут удалены все ссылки на объект.
//Можно рекурсивно перебирать значения