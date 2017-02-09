document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('getYouTube');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            f = d.createElement('form');
            f.action = 'https://www.youtube.com/';
            f.method = 'post';
            d.body.appendChild(f);
            f.submit();
        });
    });
});
