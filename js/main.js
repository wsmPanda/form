require.config({
    paths: {
        "jquery": ["http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery","jquery-1.12.3"],
        "Handlebars":"handlebars-v4.0.5"
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        }
    },
    urlBase: "/js"
})
require(["jquery","Handlebars"], function ($,Handlebars, a) {
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
    })

})