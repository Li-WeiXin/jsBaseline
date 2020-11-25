function getNews(url){
    let promise = new Promise((resolve, reject) => {
        //状态化
        //执行异步操作
        //创建xmlHttp实例对象
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status == 200) { //请求成功
                    //修改状态
                    resolve(xmlHttp.responseText); //修改promise的状态为成功的状态 。
                } else {
                    reject('暂时没有新的内容');
                }
            }
        };
        //open设置请求的方式以及Url
        xmlHttp.open('GET',url);
        //发送
        xmlHttp.send();
    });
    return promise;
}
    getNews('http://localhost:3001/news?id=2')
      .then((data)=>{
          console.log(data);
          let commentUrl = JSON.parse(data).commentsUrl
          let url = 'http://localhost:3000' + commentsUrl;
          //发送请求
          return getNews(url);
      },(error)=>{
          console.log(error);
    })
      .then((data)=>{
          console.log(data);
      },()=>{

          }
      )