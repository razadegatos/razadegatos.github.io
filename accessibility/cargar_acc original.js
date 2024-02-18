nl_lang = "en";nl_pos = "tr";nl_compact = "1";nl_dir = "https://razadegatos.info/accessibility/";

document.getElementById('accesibilidad').style.display = "none";
document.getElementById('iconoaccesibilidad').style.display = "none";

var script = document.createElement("script");
script.src = 'https://razadegatos.info/accessibility/acc_mini.js?v=2.3';
document.head.appendChild(script);

var head = document.getElementsByTagName('HEAD')[0];  
var link = document.createElement('link'); 
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'https://razadegatos.info/accessibility/accesibilidad.css';  
head.appendChild(link);