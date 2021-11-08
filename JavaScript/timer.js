var startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();

var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = function() {
    var endTime = (new Date).getTime();
    var footer = document.querySelector('footer');
    footer.textContent += endTime - startTime + 'ms.';

    var links = document.getElementsByClassName("header-a");
    for (var i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("header_now");
        }
    }
}
// $('.list').on('click', 'li', function() {
//     $(this).closest('.list').find('li').removeClass('active');
//     $(this).addClass('active');
// });
