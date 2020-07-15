var rows = document.getElementsByTagName("tr");
var i;
var unformatted_author;
var unformatted_title;
var temp1=0;
var temp2=0;
var fitness = 0;
var current_fitness;
var top_result;

//gets the author and title name from local storage.
chrome.storage.local.get(['author','title'], function(data){
  unformatted_author = data.author;
  var author = unformatted_author.toUpperCase();
  unformatted_title = data.title;
  var title = unformatted_title.toUpperCase();
  for(i=3;i<rows.length;i++)
  {
    var author_cell_data = rows[i].cells[1].innerHTML;
    var formatted_author_cell_data = author_cell_data.toUpperCase();
    if(formatted_author_cell_data.includes(author)){temp1 = 1}
    else {temp1 = 0};
    var title_cell_data = rows[i].cells[2].innerHTML;
    var formatted_title_cell_data = title_cell_data.toUpperCase();
    if(formatted_title_cell_data.includes(title)){temp2 = 1}
    else {temp2 = 0};
    current_fitness = temp1+temp2;
    if(current_fitness > fitness)
    {
      fitness = current_fitness;
      top_result = rows[i];
    }
  }
  var cell_html = top_result.cells[2].innerHTML;
  var length = cell_html.length;
  var pos = cell_html.slice(cell_html.indexOf("book"),length).search('"');
  var link_to_result = 'https://libgen.is/' + cell_html.slice(cell_html.indexOf("book"),cell_html.indexOf("book")+pos);
  chrome.runtime.sendMessage(link_to_result);
});
/*if (rows[1].cells[0].innerHTML.includes('1')&&rows[1].cells[1].innerHTML.includes('2'))
{
  top_result = rows[5];
}
else
{
  top_result = rows[3];
}
*/
