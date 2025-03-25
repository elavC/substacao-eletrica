$(window).on("load scroll", function(){
    var threshold = 40; // porcentagem da altura visível do elemento que aparecer na tela para iniciar a animação
     $(".mostrar").each(function(){
         var el = $(this);
         var eleHeight = el.outerHeight(); // altura da div
         var eleTopo = el.offset().top; // distancia da div ao topo do documento
         var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
         var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
         var altJanela = window.innerHeight; // altura da janela
         if(distance <= altJanela-(eleHeight/(threshold/10))) {
             el.animate({ 'opacity': 1 }, 1200); // 1200 = 1,2 segundo da animação. Quanto menor, mais rápido
         }
     });
 });


let time = 2500,
    currentImageIndex = 0,
    images = document.querySelectorAll('.slider img')
    max = images.length;

    function nextImage() {
        images[currentImageIndex].classList.remove('selected');

        currentImageIndex++

        if(currentImageIndex >= max) {
            currentImageIndex = 0;
        };

        images[currentImageIndex].classList.add('selected');
    };

    function start() {
        setInterval(() => {
            nextImage()
        }, time) 
    };   

    // EVENTOS
    window.addEventListener('load', start);