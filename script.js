(function() { 
    var devtools = {
        open: false,
        orientation: null
    };

    // Função para verificar se as ferramentas de desenvolvedor estão abertas
    var threshold = 160; // Limite para detectar o painel devtools
    setInterval(function() {
        // Verifica se a janela foi redimensionada ou se há um elemento suspeito de devtools
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        var orientation = widthThreshold ? 'vertical' : 'horizontal';

        if (!(heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
            if (!devtools.open || devtools.orientation !== orientation) {
                devtools.open = true;
                devtools.orientation = orientation;

                // Redirecionar para outra página quando as ferramentas de desenvolvedor são detectadas
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }
        } else {
            devtools.open = false;
            devtools.orientation = null;
        }
    }, 500);
})();        