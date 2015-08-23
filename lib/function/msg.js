module.exports = function (msg,url,title,second){
    msg = msg||'';
    url= url||'/';
    title=title||msg;
    second=second||2;
    return G.render('msg',{msg:msg,second:second,url:url,title:title});
}