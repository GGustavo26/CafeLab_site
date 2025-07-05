// funçao para inserir produtos dinamicamente na página
$(document).ready(function () {
  function renderProdutos(lista, destino) {
    const $destino = $(destino);
    $destino.empty();

    lista.forEach((produto) => {
      const item = `
        <div class="flex-shrink-0  m-4 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg group w-80 h-80 lg:w-96 sm:h-96">
          <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283" fill="none" style="opacity: 0.1;">
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
          <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
            </div>
            <img class="relative md:w-40 md:h-40 w-25 h-25" src="${produto.img}" alt="${produto.nome}" loading="lazy">
          </div>
          <div class="relative text-white text-sm sm:text-md text-left px-6 pb-5 md:mt-5 mt-0">
            <span class="block opacity-75 -mb-1 text-justify">${produto.descricao}</span>
            <div class="flex justify-between">
              <span class="block font-semibold text-3xl pb-3">${produto.nome}</span>
            </div>
            <div class="flex items-center border-t-2 border-white ">
                <p class="text-sm sm:text-md text-white cursor-auto p-4">${produto.preco}</p>
            </div>
          </div>
        </div>
      `;
      $destino.append(item);
    });
  }

  renderProdutos(bebidas, "#menu-bebidas");
  renderProdutos(comidas, "#menu-comidas");
});

// Função para rolar suavemente para o topo da página
// Seleciona o botão 'to top' pelo ID usando jQuery
var $toTopButton = $("#to-top-btn");

// Verifica se o botão existe
if ($toTopButton.length) {
  // No evento de scroll, alterna a visibilidade do botão com base na posição do scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 1000) {
      $toTopButton.removeClass("hidden");
    } else {
      $toTopButton.addClass("hidden");
    }
  });
  
  // Função para rolar suavemente para o topo da página
  window.goToTop = function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth");
  };
}
