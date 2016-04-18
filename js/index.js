

require(["jquery", "Handlebars"], function ($, Handlebars) {
    var data = {
        users: [
            {username: "zhangsan", firstname: "zhang", lastname: "san", email: "zhangsan@123.com"},
            {username: "zhangsan", firstname: "zhang", lastname: "san", email: "zhangsan@123.com"},
            {username: "zhangsan", firstname: "zhang", lastname: "san", email: "zhangsan@123.com"},
            {username: "zhangsan", firstname: "zhang", lastname: "san", email: "zhangsan@123.com"},
            {username: "wangwu", firstname: "wang", lastname: "wu", email: "wangwu@qq.com"}]
    };
    var source = $("#table1").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#my_div1").html(html);


    var theTemplateScript = $("#address-template").html();
    // 编译模板
    var theTemplate = Handlebars.compile(theTemplateScript);
    // 定义数据
    var context={
        "city": "London",
        "street": "Baker Street",
        "number": "221B"
    };
    // 把数据传送到模板
    var theCompiledHtml = theTemplate(context);
    // 更新到模板
    $('#t1').html(theCompiledHtml);
   
})