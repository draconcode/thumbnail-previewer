$(document).ready(function() {
    $('.container .grid-col li a').click(function(e) {
        let href = e.target.parentElement.getAttribute('href');
        console.log('click', href);
        $('.tabcontent').each(function(index, elem) {
            if (`#${elem.id}` != href) {
                $(elem).removeClass('active');
            }
        });

        $('.container .blog-content span').click(function () {
            $(href).removeClass('active');
        })

        $(href).toggleClass('active');
        $('.tabcontent').css({
            height: '30rem'
        })
    });
});
