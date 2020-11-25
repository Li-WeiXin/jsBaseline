/**
 * @Description: 统计所有小于非负整数 n 的质数的数量
 * @author Li,Weixin
 * @date 2020/11/22
*/


var countPrinmes = function (n) {
    let count = 0;
    sign = new Array(n+1);
    for(let i = 2;i<n;i++){
        if(!sign[i]){
            count++;
            for(let j=2*i;j<n;j+=i){
                sign[j] = true
            }
        }
    }
    return count

};

// console.log(countPrinmes(10));