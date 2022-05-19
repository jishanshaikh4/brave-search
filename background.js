// github.com/jishanshaikh4/brave-search
// License: MIT
// v1.0.1, last updated: May 2022

chrome.omnibox.onInputEntered.addListener((text) => {
  var newURL = 'https://search.brave.com/search?q=' + encodeURIComponent(text) +
               '&source=web';
  chrome.tabs.create({url : newURL});
});
