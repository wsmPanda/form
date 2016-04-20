require.config({
    packages: [{
        name: "codemirror",
        location: "",
        main: "lib/codemirror"
    }, {
        name: "umeditor",
        location: "",
        lib: "umeditor",
        main: "umeditor.min"
    }
    ],

    paths: {
        "jquery": ["http://cdn.bootcss.com/jquery/3.0.0-beta1/jquery", "jquery-1.12.3"],
        "Handlebars": "handlebars-v4.0.5",
        //"umeditor.min": "umeditor/umeditor.min",
        "umeditor.config": "umeditor/umeditor.config"
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        },
        'umeditor/umeditor.min': {
            exports: 'UM'
        },
        'umeditor.config': ['jquery']

    },
    urlBase: "js",
})
require(
    [
        "jquery",
        "Handlebars",
        "moment",
        "daterangepicker",
        "umeditor/umeditor.min",
        "codemirror",
        "codemirror/mode/sql/sql",
        "umeditor.config",
        "select2"
    ],
    function ($, Handlebars, moment, daterangepicker, UM, CodeMirror) {

        $(document).ready(function () {
            /*
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
             */
            var um = UM.getEditor('editor');
            window.editor = CodeMirror.fromTextArea(document.getElementById('ta1'), {
                mode: 'text/x-mariadb',
                indentWithTabs: true,
                smartIndent: true,
                lineNumbers: true,
                matchBrackets: true,
                autofocus: true,
                extraKeys: {"Ctrl-Space": "autocomplete"},
                hintOptions: {
                    tables: {
                        users: {name: null, score: null, birthDate: null},
                        countries: {name: null, population: null, size: null}
                    }
                }
            });

            var timepicker = $('#time').daterangepicker({
                    language: 'zh-CN',
                    applyLabel: 'Apply111',
                    cancelLabel: 'Cancel',
                    "startDate": "2016",
                    "endDate": "2016",
                    showDropdowns: false,
                    locale: {
                        format: 'YYYY年MM月DD日',
                        separator: ' - ',
                        applyLabel: '接受',
                        cancelLabel: '取消',
                        weekLabel: '周',
                        customRangeLabel: '自定义时间',
                        daysOfWeek: ['一', '二', '三', '四', '五', '六', '日'],
                        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        firstDay: moment.localeData().firstDayOfWeek()
                    }
                },
                function (start, end, label) {
                    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
                }
            );
            timepicker.on('apply.daterangepicker', function () {
                $("#startTime").val($("input[name='daterangepicker_start']").val());
                $("#endTime").val($("input[name='daterangepicker_end']").val());
                //alert($("input[name='daterangepicker_start']").val())
            });
            var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

            var list=$("#s2").select2({
                data: data
            });
            list.on('select2:select', function () {
                var id=$("#s2").val();
                $("#v2").val(id);
                $("#t2").val($("#s2")[0][id].text);
            });


        })

    })