chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
    {
      //if(response.slice(0,5)=='final')
      //{
        //chrome.tabs.create({url: response.slice(5,response.length)});
      //}
      //else
      //{
        chrome.tabs.create({url: response});
      //}
    });
