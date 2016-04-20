require.config({
    packages: [{
        name: "codemirror",
        location: "",
        main: "lib/codemirror"
    }]
});
require(["codemirror",
    "codemirror/mode/sql/sql"], function(CodeMirror) {
    window.editor = CodeMirror.fromTextArea(document.getElementById('ta1'), {
        mode: 'text/x-mariadb',
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets : true,
        autofocus: true,
        extraKeys: {"Ctrl-Space": "autocomplete"},
        hintOptions: {tables: {
            users: {name: null, score: null, birthDate: null},
            countries: {name: null, population: null, size: null}
        }}
    });
    CodeMirror.modeURL = "codemirror/mode/%N/%N";


});