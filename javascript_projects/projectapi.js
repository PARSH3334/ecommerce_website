fetch('myfile.txt').then(response=>{

    if(!response.ok){
        throw new Error('NETWORK IS NOT RESPONDING')
    }
    return response.text()
}).then(data=>console.log(data))
.catch(error=> console.log(error));