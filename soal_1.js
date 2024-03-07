for(let numbe = 2; numbe <= 1000; numbe++){
    let bilangan_prima = true
    for(let j = 2; j < numbe; j++){
        if(numbe % j ===0){
            bilangan_prima = false
            break
        }
    }
    if(bilangan_prima){
        console.log(numbe + " ")
    }
}