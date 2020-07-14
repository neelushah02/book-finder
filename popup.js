function query(title, author)
{
  chrome.tabs.create({url: "https://libgen.is/"});
  chrome.tabs.executeScript(null,{code: 'document.getElementById("searchform").value=' + '"' + title + '"'});
  chrome.tabs.executeScript(null, {code:'document.getElementsByTagName("input")[1].click()'});
  //chrome.tabs.query({string: "https://libgen.is/search.*"}, function(tabs) {
    //var rows = document.getElementsByTagName("tr");
    //var i;
    //for (i = 0; i < rows.length; i++)
    //{
      //  rows[i].style.backgroundColor = "red";
    //}
  //});
  //setTimeout(function(){
    //string temp = chrome.runtime.getURL();
    //chrome.tabs.update({url: temp});
  //}, 4000);

}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    query(title, author);
  }
}, false)
