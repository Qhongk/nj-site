module.exports = {
    delHtmlTag: function (str) {
        return str.replace(/<[^>]+>/g, "");
    },

    subhtml:function(str,num,begin){
        num = num||500;
        begin = begin||0;
        str = this.delHtmlTag(str);
        return str.substring(begin, num);
    },

    safe:function(str){

        xss = require('xss');
        xss.whiteList['pre'] = ['class', 'style','id'];
        xss.whiteList['p'] = ['class', 'style','id'];
        xss.whiteList['span'] = ['class', 'style','id'];
        xss.whiteList['div'] = ['class', 'style','id'];

        return xss(str);
    }
}
