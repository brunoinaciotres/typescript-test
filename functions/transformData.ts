type User = {
    name: string
    id: number,
    age: number,
    isActive: boolean
}

type UserReduced = {
    id: number,
    name: string
}

const users: User[] = [
    { id: 1, name: 'Zen', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true },
    { id: 3, name: 'Alice', age: 22, isActive: true },
    { id: 4, name: 'João', age: 40, isActive: false },
    { id: 5, name: 'Maria', age: 27, isActive: true },
    { id: 5, name: 'Bruno', age: 21, isActive: true },
    { id: 6, name: 'Diego', age: 36, isActive: true },
    { id: 7, name: 'Robert', age: 43, isActive: true }
  ]

//Para entradas grandes, vale uma reavaliação para garantir boa performance.
//Não estou certo como o .sort() do JS funciona por trás, 
//então implementaria manualmente um Quicksort para garantir
//complexidade média de O(n log n) no sort que põe em ordem alfabética

function transformData(usersList: User[]){
    let activeUsers = usersList.reduce((acc:UserReduced[], user) => {
        if (user.isActive){
            acc.push({id: user.id, name: user.name})
        }
        return acc
    }, [])
    
    activeUsers.sort((a, b) => a.name[0].localeCompare(b.name[0]));

    return activeUsers
}

console.log(transformData(users))
