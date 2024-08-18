type obj = {
    id:number,
    [key: string]: any
}

const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
];

const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 3, name: 'Charlie', age: 22 },
];
   

function mergeArrays(arr1:obj[], arr2:obj[]){

    const newArr = [] as obj[]

    for (let i = 0; i < arr1.length; i++) {

        for (let j = 0; j < arr2.length; j++){

            if (arr1[i].id == arr2[j].id){
                let newObj = {...arr2[j]}
                const propertiesObj1 = Object.keys(arr1[i]);
                propertiesObj1.forEach(prop => {
                    if(!(prop in arr2[j])){
                        newObj[prop] = arr1[i][prop] 
                    }
                })
                newArr.push(newObj)
                arr2.splice(j, 1)
                arr1.splice(i,1)
                
            } 
        }
      
    }
 
    return [...newArr, ...arr1, ...arr2]
}

console.log(mergeArrays(array1, array2))