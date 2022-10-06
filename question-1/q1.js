let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (arr) => {
  let newArr = arr.filter(el=>typeof el == 'string')
                  .map(el=>el.toLowerCase())
  mixedArray = newArr
  const output = new Promise((res,rej) => {
    if(arr) {
      res("It works")
    } else {
      rej(Error("It brokes"))
    }
  })
  return output
}

lowerCaseWords(mixedArray)
console.log(mixedArray)