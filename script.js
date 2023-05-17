window.alert("Working1");
let urls = {
"incog":"https://puce-poised-panther.cyclic.app/",
"hyper":"https://navy-blue-dolphin-tutu.cyclic.app/",
}
let codes = {
"Lt9bhf": "hyper",
"hNB3RC": "incog",
}
function redirect(url){
let w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999,height=9999");
	w.document.write('<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none;" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="'+url+'"></iframe>');
}
let textbox = document.getElementById("textbox");
// Remember to put onkeydown = 'clickPress(event);'
function match(code){
let url = urls[codes[code.substring(0,6)]]
redirect(url);
}
function enter(){
	let text = textbox.value;
  if (codes[text.substring(0,6)]){
  	textbox.remove();
    match(text);
  }
}
function clickPress(event) {
    if (event.key == "Enter") {
        // do something 
        enter();
    }
}
