$(document).ready(function() {
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
});