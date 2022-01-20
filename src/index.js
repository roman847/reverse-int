module.exports = function reverse (n) {
    let result = ''
    if(n > 0) {
        let reverseStr =  n.toString().split('').reverse()
        let resNumber = reverseStr.forEach(element => {
            result+= +element   
          });
          return +result
    }else {
      return +n.toString().split('').reverse().join('').slice(0, -1);
    }
      
      
        
}
