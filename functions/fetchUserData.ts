
async function fetchUserData(){
        try {   
            const res = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            
            const data = await res.json()
            
            const usersFiltered = data.filter((user: { username: string }) => {
                return user.username[0] == "C"
            })

            if (usersFiltered.length != 0){
                return usersFiltered
            }

            return "Não há usernames com a letra C"
            
        } catch (error) {
            throw error
        }
       
}

fetchUserData()
.then(data => console.log(data))
.catch((e) => {
    console.log("Ocorreu um erro --> " + e)

})


