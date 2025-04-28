
findAllURL = function changeAllURL(text) {
    var current = window.location.href; if (current.startsWith(text)) {
        document.head.innerHTML = generateSTYLES(); document.body.innerHTML = generateHTML(text); document.documentElement.scrollTop = 0;
    }
}
chrome.storage.local.get(['site', 'from', 'to'], function (result) {
    var now = new Date();
    var from = new Date(result.from);
    var to = new Date(result.to);
    website = result.site;
    if (Date.parse(now) > Date.parse(from) && Date.parse(now) < Date.parse(to)) {
        console.log("Blocked")
        findAllURL(website);
    }
});