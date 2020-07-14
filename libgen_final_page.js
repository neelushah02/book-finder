var rows = document.getElementsByTagName("tr");
var top_result = rows[1];
var cell_html = top_result.cells[0].innerHTML;
var length = cell_html.length;
var pos = cell_html.slice(13,length).search('"');
var link_to_result = cell_html.slice(13,13+pos);
alert(link_to_result);
chrome.runtime.sendMessage(link_to_result);
