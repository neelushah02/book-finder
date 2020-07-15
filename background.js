chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
    {
      chrome.tabs.create({url: response});
      chrome.tabs.remove(sender.id);
    });
