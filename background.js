// background scripts are used to add an event listener
// it will be used to add an event listener before the time that we send a request
// in this example, if the send request is going to a specific website, we will do something

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true }; // it blocks whatever request we are about to send
  },
  // it specify which urls we wan't to apply the blocks, if it wasn't specified it would apply to all urls
  { urls: ["*://*.zedo.com/*"] },
  ["blocking"]
);
