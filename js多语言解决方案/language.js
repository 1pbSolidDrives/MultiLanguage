
/**
 * Created by sangHongLu on 2016/10/20.
 */


var EN =
{
    "sksks" : "get one's things"
}


var ch_cn =
{
    "k1" : "收拾收拾 {0}{1}{2}{3}{4}{5}{6}{7}{8}{9}{10}{11}"
}

var languages =
{
    "ch_cn": ch_cn,
    "en": EN,

}

//获取设备语言
var languageType ;
function chackLanguage(langName) {
    languageType = langName;
}

function langGet(key) {
    var args = arguments;
    if(args.length < 2) return "你参数填写的过少";
    if(args.length > 2) return "你应该使用另一个函数 langFormat";
    try
    {
        var a = languages[languageType][key];
        return a;
    }
    catch(err)
    {
        console.log(err);
        return "NULL";
    }
}

function langFormat(key,others) {

    var args = arguments;

    if(args.length <= 2) return "你应该使用另一个函数 langGet";

    try
    {
        var languageBuffer = languages[languageType][args[0]];//获取要修改的字符串
        console.log(languageBuffer);

        var newstr = setParameter(languageBuffer,args);
        console.log(newstr);

        return newstr;
    }
    catch(err)
    {
        console.log(err);

        return "NULL";
    }
}
//设置参数
function setParameter() {
    var oldStr = arguments[0];
    var newStr = arguments[1];
    //var str22= ["111","222","333","444"];//即将被替换的字符数组
    // var str2 = "aaa{1}bbb{2}ccc{3}ddd{0}";//替换之前的字符串
    var patt1=/\{\d+\}/g;//正则表达式 判断时候需要的原料
    var str3 = (oldStr.match(patt1));//按照原料1 提取相应字符串
    if(newStr.length-1 == str3.length)//判断外面给的参数跟自己需要的 数量是否相同
    {
        for (var obj =0; obj<str3.length; obj++){
            var num = "{"+obj+"}";
            oldStr = oldStr.replace(num,newStr[obj+1]);
        }
        console.log(oldStr);
        return oldStr;
    }
    else
    {
        return "你的 参数输入错误="
    }
   //  var str22= ["111","222","333","444"];//即将被替换的字符数组
   //  var str222 = [];//即将转换顺序的字符串数组
   //  var str2 = "aaa{1}bbb{2}ccc{3}ddd{0}";//替换之前的字符串
   //  var patt1=/\{[0-9]\}/g;//正则表达式 判断时候需要的原料
   //  var str3 = (str2.match(patt1));//按照原料1 提取相应字符串
   //  var array = new Array();
   //
   //  var str = "{0000}r";
   //
   //
   //  //var substr = str.match(/(\S*)(?=ff)/);
   //  var substr = str.match(/\{\S*d(\S*)\}/);
   //  //var substr = str2.match( /{(.*?)}/g);
   //
   //
   //  alert(substr);
   //
   //  for (var obj in str3)
   //  {
   //      console.log(str3[obj]);
   //
   //      var after = str3[obj];
   //      var afterAfter = after.match(/\{\S*d(\S*)\}/g);
   //      //var afterAfter = after.math(/\{\S*d(\S*)\}/g);
   //      console.log(after);
   //
   //      console.log(afterAfter);
   //      array.push(afterAfter);
   //  }
   //  console.log(array);
   //
   //
   //
   //  var str = "iabd0000ffr";
   // //  var array = new Array();
   // // for (var obj in str3){
   // //
   // // }
   //
   //  //var substr = str.match(/(\S*)(?=ff)/);
   //  //var substr = str.match(/ab\S*d(\S*)ff/);
   //  //var substr = str2.match( /{(.*?)}/g);
   //
   //
   //  alert(substr);
   //
   //
   //  //var str4 = str3.match(patt2);//找出数字
   //  // //获取某两个字符之间的字符串 获取第一个字符串的位置 把转换完的字符添加会去 但是 只能获取一个字符的
   //  // var index1=str2.indexOf("{");
   //  // var index2=str2.indexOf("}");
   //  // var str4 = str2.substring(index1+1,index2);
   //  // console.log("str4"+str4);
   //
   //  //按顺序 把 新来的参数摆放好
   //  //要验证 参数数量是否一致
   //  //if(str22.length != str4.length) return "缺少参数";
   //
   //  for(var obj in str4){
   //      console.log("obj"+str4[obj]);
   //      var a = parseInt(str4[obj]);//这个是第几个
   //      str4[obj] = str22[a];
   //  }
   //  console.log("str3"+str3);
   //  console.log("str4"+str4);
   //  console.log("str22"+str22);
}

//实例
var oldstr = "aaa{1}bbb{2}ccc{3}ddd{0}";//替换之前的字符串 通过key 可以拿到的 字符串
var newStr= ["111","222","333","444"];//即将被替换的字符数组
//setParameter(oldstr,newStr);
chackLanguage("ch_cn");
langFormat("k1","111","222","111","222","111","222","111","222","111","222","111","111");//第一个是 key  后面的是要填写到文字中的参数
langGet("k1");


