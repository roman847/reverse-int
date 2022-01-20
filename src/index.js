module.exports = function reverse (n) {
    function solution(n){
        if (n > 0) {
            return n.toString().split('').reverse().join('');
         } else {
            return n.toString().split('').reverse().join('').slice(0, -1);
         }
      }
      
        
}
