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

    // MODAL SERVICE INITIAL
    const modalService = document.getElementById('modal-service');
    const headerService = document.getElementById('header-service');
    const closeService = document.getElementById('close-service');

    function openModalService() {
        modalService.style.display = "flex";
    };

    function closeModalService() {
        if(modalService.style.display === "flex") {
            modalService.style.display = "none";
        };
    };
    // MODAL SERVICE FINAL
    
    
    
    // MODAL NUMERO 1 CARTÃO
    const header = document.getElementById("header");
    const modal_01 = document.getElementById('modal-1');
    const headerCard = document.getElementById('header-card');
    const closeModal_01 = document.getElementById('close-1');

    function openModal_1() {
        modal_01.style.display = "flex";
    }

    function closeModal_1() {
        if(modal_01.style.display = "flex")
        modal_01.style.display = "none"
    }



    // MODAL NUMERO 2 CARTÃO
    const modalClose = document.getElementById('close');
    const card = document.getElementById('card');
    const modal = document.getElementById('modal');

    function openModal() {
        modal.style.display = "flex";
    };

    function closeModal() {
        modal.style.display = "none";
    };

    // MODAL CRF INITIAL
    const modal_crf = document.getElementById('modal-crf');
    const close_crf = document.getElementById('close-crf');
    const crf = document.getElementById('crf');

    function openModalCrf() {
        modal_crf.style.display = "flex";
    }

    function closeModalCrf() {
        modal_crf.style.display = "none";
    } 
    // MODAL CRF FINAL

        // MODAL CONSORCIO INITIAL
        const modal_consorcio = document.getElementById('modal-consorcio');
        const close_consorcio = document.getElementById('close-consorcio');
        const consorcio = document.getElementById('consorcio');
    
        function openModalConsorcio() {
            modal_consorcio.style.display = "flex";
        }
    
        function closeModalConsorcio() {
            modal_consorcio.style.display = "none";
        } 
        // MODAL CONSORCIO FINAL


    // FAQ INITIAL
    const summary_1 = document.getElementById('summary_1');
    const summary_2 = document.getElementById('summary_2');
    const par_2 = document.getElementById('par_2');

    function selectedSummary() {
        par_2.style.display = "none";
    };

    function selectedSummary_02() {

        par_2.style.display = "none"
    };

    // FAQ FINAL

    // EVENTOS
    window.addEventListener('load', start);

    headerService.addEventListener('click', openModalService);
    closeService.addEventListener('click', closeModalService);

    headerCard.addEventListener('click', openModal_1);
    closeModal_01.addEventListener('click', closeModal_1);

    card.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);
    summary_1.addEventListener('click', selectedSummary)

    crf.addEventListener('click', openModalCrf);
    close_crf.addEventListener('click', closeModalCrf);

    consorcio.addEventListener('click', openModalConsorcio);
    close_consorcio.addEventListener('click', closeModalConsorcio);
