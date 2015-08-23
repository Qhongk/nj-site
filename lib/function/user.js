module.exports = {


    avatar:function(email,size){
        var a =  F.encode.md5(email);
        a = (size>0)?a+'?s='+size:a;
        return a;
    }
}
