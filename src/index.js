module.exports = function reverse (n) {
    
        let reverseStr =  n.toString().split('').reverse()
        let res = ''
        let resNumber = reverseStr.forEach(element => {
          res+= +element
          console.log(typeof(res))
        });
        return +res
      
      
        
}
