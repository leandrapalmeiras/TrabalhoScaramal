// Função JavaScript para controlar a troca de abas
function openTab(tabId, buttonId) {
    // 1. Ocultar todos os conteúdos das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    // 2. Desativar todos os botões das abas
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        // Remove a cor ativa
        button.classList.remove('text-blue-600', 'border-blue-600');
        // Adiciona a cor inativa e hover
        button.classList.add('text-gray-500', 'border-transparent', 'hover:text-blue-600', 'hover:border-blue-300');
    });

    // 3. Mostrar o conteúdo da aba selecionada
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }

    // 4. Ativar o botão da aba selecionada
    const selectedButton = document.getElementById(buttonId);
    if (selectedButton) {
        // Remove a cor inativa
        selectedButton.classList.remove('text-gray-500', 'border-transparent', 'hover:text-blue-600', 'hover:border-blue-300');
        // Adiciona a cor ativa
        selectedButton.classList.add('text-blue-600', 'border-blue-600');
    }
}

// Abrir a primeira aba por padrão ao carregar a página
window.onload = function() {
    openTab('tab-problema', 'btn-problema');
};