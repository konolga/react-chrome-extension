chrome.runtime.onInstalled.addListener(() => {
  console.log("onInstalled....");
  fetchHistory();
});

function fetchHistory() {
  return chrome.history.search({ text: "", maxResults: 5 }, (data) => {
    return data;
  });
}

export default fetchHistory;
