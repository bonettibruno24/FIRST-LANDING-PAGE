window.leftguide = ScrollReveal({reset:true})

leftguide.reveal('.box__data', 
{
    origin: 'right',
    distance: '100px',
    duration: 500
}),

leftguide.reveal('.box__data1', 
{
    origin: 'right',
    distance: '150px',
    duration: 1000
}),
leftguide.reveal('.box__data2', 
{
    origin: 'right',
    distance: '200px',
    duration: 1500
}),
leftguide.reveal('.box__data3', 
{
    origin: 'right',
    distance: '250px',
    duration: 2000
})
// Ativando a transição inversa quando estiver rolando a página para cima
window.addEventListener('scroll', function() {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        scrollRevealInverse.sync();
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});



