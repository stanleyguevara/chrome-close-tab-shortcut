chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(active) {
        if(active.length > 0) {
            chrome.tabs.remove(active[0].id);
        }
    });
});
