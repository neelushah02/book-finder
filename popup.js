function querylibgen(title, author)
{
  chrome.tabs.create({url: "https://libgen.is/"});
  chrome.tabs.executeScript(null,{code: 'document.getElementById("searchform").value=' + '"' + title + '"'});
  chrome.tabs.executeScript(null,{file: "content.js"});
  //chrome.tabs.executeScript(null, {code: 'document.getElementsByTagName("input")[1].click()'})
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    querylibgen(title, author);
  }
}, false)
