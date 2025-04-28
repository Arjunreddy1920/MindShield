document.addEventListener("DOMContentLoaded', function () {
    
    chrome.storage.local.get(['site', 'from', 'to'], function (result) {
        if (result.site != null) {
            document.getElementById("site").value = result.site
        }
        if (result.from != null) {
            document.getElementById("from-time").value = result.from
        }
    
        if (result.to != null) {
            document.getElementById("to-time").value = result.to
        }
    });
        
    document.getElementById("myForm").addEventListener("submit", saveForm);
});
function saveForm() {
    const form = document.getElementById('myForm'); const site = form.elements['site'].value
    const from
    form.elements['from-time'].value
    const to = form.elements['to-time'].value
    site != "" || from != || to != "" ?
        chrome.storage.local.set({ site: site, from: from, to: to }, function () {
            alert(site + "website blocked from "+ Date (from).toString().split("GMT")[0] +"to"+ Date(to).toString().split("GMT")[0]);
        }) : alert('Fields cannot be empty')
}