const resolvePromise = (result) =>{
  return new Promise((res,rej) => {
    setTimeout(()=> {
      if(result) {
        res("{'message':'delayed success!'}")
      } else {
        rej("{'error':'delayed exception'}")
      }
    },500)
  })
}

const rejectedPromise = (result)=> {
  return new Promise((res,rej)=>{
    setTimeout(()=> {
      if(result) {
        res("{'error':'delayed success'}")
      } else {
        rej("{'error':'delayed exception'}")
      }
    },1000)
  })
}
let resolve = resolvePromise(true)
resolve.then(res=>console.log(res))
let reject = rejectedPromise(false)
reject.then( res => console.log(res), rej => console.log(rej)
)
