function findAllURL(text) {
    const current = window.location.href;
    if (current.startsWith(text)) {
        document.head.innerHTML = generateSTYLES();
        document.body.innerHTML = generateHTML(text);
        document.documentElement.scrollTop = 0;
    }
}

chrome.storage.local.get(['site', 'from', 'to'], function (result) {
    const now = new Date();
    const from = new Date(result.from);
    const to = new Date(result.to);
    const website = result.site;

    if (now > from && now < to) {
        console.log("Blocked");
        findAllURL(website);
    }
});