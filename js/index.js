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
        "dataTables-bootstrap":"dataTables.bootstrap"
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
        "select2",
        "dataTables-bootstrap"

    ],
    function ($, Handlebars, moment, daterangepicker, UM, CodeMirror) {
        $(document).ready(function () {

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
                        "sPrevious": "上页",
                        "sNext": "下页",
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


        });

    })