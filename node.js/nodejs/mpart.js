var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

var M1 = {
    v:'b',
    f:function(){
        console.log(this.v);
    }
}
module.exports = {
    M,
    M1
 } // M과 M1를 이 모듈 밖에서 사용할 수 있게 EXPORT 하겠다.

 
