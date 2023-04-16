
const errorMsgs = (errores) => {
     let input = [];
     let msg = [];
    
    for (let key in errores) {
        
        input.push(key)
        msg.push(errores[key].msg)
        
     }

     return {
        input,
        msg
     }
}

module.exports = {
    errorMsgs
}