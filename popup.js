function query(title, author)
{
  chrome.tabs.create({url: "https://libgen.is/"});
  chrome.storage.local.get('author', function(data){
    author = data.author;
    alert(data.author);
  });
  chrome.tabs.executeScript(null,{code: 'document.getElementById("searchform").value=' + '"' + title + '"'});
  chrome.tabs.executeScript(null, {code:'document.getElementsByTagName("input")[1].click()'});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false)
  function onclick () {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    chrome.storage.local.set({'author': author});
    chrome.storage.local.set({'title': title});
    query(title, author);
  }
}, false)
