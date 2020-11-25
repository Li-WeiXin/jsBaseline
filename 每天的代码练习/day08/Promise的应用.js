const fs = require('fs');

//Promise 实例被创建就会立即实行里面的异步方法

function getFileByPath(fpath) {
    return promise = new Promise(function (resolve, reject) {
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if(err) return reject(err);
            resolve(dataStr)
        })
    })
}

//读取文件1
getFileByPath('./1.txt')
  .then(function (data) {
      console.log(data);

      //读取文件2
      return getFileByPath('./2.txt')
  })
  .then(function (data) {
      console.log(data);

      //读取文件3
      return getFileByPath('./3.txt')
  })
  .then(function (data) {
      console.log(data);
  })

    //catch的作用：如果前面有任何的Promise执行失败，则立即终止所有的Promise的执行，并马上进入catch去处理Promise抛出的异常。
  .catch(function (err) {
      console.log(err.message);
  });