function fun(task){
    return new Promise((resolve, reject) => {
        if(task==true){
            resolve("Completed")
        }
        else{
            reject("NOT Completed");
        }
    })
}

let onResolve=(res)=>{
    console.log(res);
}


let onReject=(err)=>{
    console.log(err);
}

fun(true).then(onResolve).catch(onReject);