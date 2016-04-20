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
        "select2",
        "jquery.dataTables"
    ],
    function ($, Handlebars, moment, daterangepicker, UM, CodeMirror) {
        $(document).ready(function () {


        })

    })