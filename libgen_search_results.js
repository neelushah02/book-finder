var rows = document.getElementsByTagName("tr");
//first tr on all pages encompasses the libgen logo, search bar, filters etc.
//second tr on all pages tells you how many files were found.
//third tr is the headers for the table
//trying to pick up the link for the fourth table row, which is the top result
var top_result = rows[3];
// since third cell in the row contains the link to the download page,
var cell_html = top_result.cells[2].innerHTML;
var length = cell_html.length;
var pos = cell_html.slice(9,length).search('"');
var link_to_result = 'https://libgen.is/' + cell_html.slice(9,9+pos);
chrome.runtime.sendMessage(link_to_result);
//chrome.storage.local.set({libgen_link: link_to_result});
