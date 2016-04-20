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
        "umeditor.config": "umeditor/umeditor.config",
        "datatables.net":"jquery.dataTables",
        "dataTables-bootstrap":"dataTables.bootstrap",
        'bootstrap': 'bootstrap.min'
    },
    shim: {
        'Handlebars': {
            exports: 'Handlebars'
        },
        'umeditor/umeditor.min': {
            exports: 'UM'
        },
        'bootstrap' : {
            deps : [ 'jquery' ],
            exports : 'Bootstrap'
        },
        'umeditor.config': ['jquery'],
        'umeditor.min': ['jquery'],
        'umeditor': ['jquery']

    },
    urlBase: "js"
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
        "select2",
        "dataTables-bootstrap",
        "bootstrap"

    ],
    function ($, Handlebars, moment, daterangepicker, UM, CodeMirror) {
        $(document).ready(function () {
            $('#time2').daterangepicker({
                "startDate": "04/14/2016",
                "endDate": "04/20/2016"
            }, function(start, end, label) {
                console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
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
            });
            var um = UM.getEditor('note');

            var mainTable=$('#mainTable').dataTable( {
                "ajax": "dataset1.txt",
                "dom": '<"toolbar">frtip',
                "columns": [
                    { "data": "name",title:"name" },
                    { "data": "position",title:"position" },
                    { "data": "office",title:"office" },
                    { "data": "extn" ,title:"extn"},
                    { "data": "start_date",title:"start_date" },
                    { "data": "salary" ,title:"salary"}
                ],
                language: {
                    "sProcessing": "处理中...",
                    "sLengthMenu": "显示 _MENU_ 项结果",
                    "sZeroRecords": "没有匹配结果",
                    "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                    "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                    "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                    "sInfoPostFix": "",
                    "sSearch": "搜索:",
                    "sUrl": "",
                    "sEmptyTable": "表中数据为空",
                    "sLoadingRecords": "载入中...",
                    "sInfoThousands": ",",
                    "oPaginate": {
                        "sFirst": "首页",
                        "sPrevious": "<<",
                        "sNext": ">>",
                        "sLast": "末页"
                    },
                    "oAria": {
                        "sSortAscending": ": 以升序排列此列",
                        "sSortDescending": ": 以降序排列此列"
                    }
                }
            } );
            $('#mainTable tbody').on('click', 'tr', function () {
                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    $("#btn-delete").attr('disabled', "true");
                    $("#btn-edit").attr('disabled', "true");
                }
                else {
                    mainTable.$('tr.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $("#btn-delete").removeAttr("disabled");
                    $("#btn-edit").removeAttr("disabled");
                }
            });



            $("#btn-edit").on("click",function () {
                location.href ="panel.html";
            });
            $("#btn-add").on("click",function () {
                location.href ="panel.html";
            });


        });

    })