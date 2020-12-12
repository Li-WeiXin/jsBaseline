/**
 * @Description: 快速排序
 *  pivot 的解决方案 ：取头中尾的中位数
 * @author Li,Weixin
 * @date 2020/12/11
*/

const swap=(arr,i,j) =>{
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

function quickSort_pivot(array) {
    array.prototype.median = function (left,right) {
        // 1.取出中间位置
        var center = Math.floor((left+right) / 2);
        //2.判断大小，并且进行交换
        if(array[left] > array[center]){
            this.swap(left,center)
        }
        if (array[center]>array[right]){
            this.swap(center,right)
        }
        if(array[left]>array[right]){
            this.swap(left,right)
        }

    }
    
}