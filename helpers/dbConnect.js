const urlBase='https://api-blog-ahz5.onrender.com/api/'
const express = require('express')


const consulta = async(url,method,body) => {

    let options={}
    if(method=='post' || method=='put'){
        
       const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='delete'){
        const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='get'){
        options={
            method: method,
        }
    }
    
      return await fetch(`${urlBase}${url}`,options);
}

module.exports = {
    consulta
}