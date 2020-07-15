chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
    {
      chrome.tabs.update({url: response});
    });
