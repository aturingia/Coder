const htmlEditor = CodeMirror(document.querySelector(".editor .code .html-code"), {
  lineNumbers: true,
  tabSize: 4,
  theme: "monokai",
  mode:"text/html",
  styleActiveLine: true,
  lineWrapping: true,
  autoCloseTags: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  matchInMiddle: true,
  extraKeys: {"Ctrl-Space": "autocomplete"}
});
const cssEditor = CodeMirror(document.querySelector(".editor .code .css-code"), {
  lineNumbers: true,
  tabSize: 4,
  theme: "monokai",
  mode:"css",
  styleActiveLine: true,
  lineWrapping: true,
  autoCloseTags: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  matchInMiddle: true,
  extraKeys: {"Ctrl-Space": "autocomplete"}
});
const jsEditor = CodeMirror(document.querySelector(".editor .code .js-code"), {
  lineNumbers: true,
  tabSize: 4,
  theme: "monokai",
  mode: {name: "javascript", globalVars: true},
  styleActiveLine: true,
  lineWrapping: true,
  autoCloseTags: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  matchInMiddle: true,
  extraKeys: {"Ctrl-Space": "autocomplete"}
});

document.querySelector("#run-btn").addEventListener("click", function() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";
  let previewWindow = document.querySelector("#preview-window").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode+cssCode+jsCode);
  previewWindow.close();
});