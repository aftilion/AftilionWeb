var startTime = 0;

(function() {
    startTime = (new Date).getTime();
})();

var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = function() {
    var endTime = (new Date).getTime();
    var footer = document.querySelector('footer');
    footer.textContent += endTime - startTime + 'ms.';
}
// $('.list').on('click', 'li', function() {
//     $(this).closest('.list').find('li').removeClass('active');
//     $(this).addClass('active');
// });
