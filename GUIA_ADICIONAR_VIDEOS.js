/*
 * GUIA PARA ADICIONAR NOVOS VÍDEOS DO YOUTUBE
 * ===========================================
 * 
 * Para adicionar um novo vídeo, você só precisa:
 * 1. Pegar a URL do YouTube
 * 2. Adicionar no array 'movies' no arquivo script.js
 * 
 * FORMATO SIMPLIFICADO:
 * Você pode usar a função createVideoFromUrl() diretamente no console:
 */

// EXEMPLO 1: Adicionando vídeo manualmente
const novoVideo = {
    img: "https://img.youtube.com/vi/SEU_VIDEO_ID/maxresdefault.jpg",
    title: "Título do Episódio",
    link: "https://www.youtube.com/embed/SEU_VIDEO_ID",
    category: "growcast",
    episode: "07", // Número do episódio com 2 dígitos
    description: "Descrição do episódio",
    duration: "45 min"
};

// EXEMPLO 2: Usando a função auxiliar (mais fácil)
// Abra o console do navegador (F12) e execute:
/*
const novoVideo = createVideoFromUrl(
    "https://www.youtube.com/watch?v=SEU_VIDEO_ID",
    "Título do Episódio",
    "growcast",
    "07",
    "Descrição do episódio",
    "45 min"
);
movies.push(novoVideo);
*/

// EXEMPLO 3: URLs reais do YouTube que funcionam
const exemplosReais = [
    {
        url: "https://www.youtube.com/watch?v=aJ-HZuLcKeA",
        titulo: "Growcast #00 - Conheça a Growdev",
        episodio: "01"
    },
    // Adicione suas URLs aqui...
];

/*
 * INSTRUÇÕES PASSO A PASSO:
 * 
 * 1. Encontre o vídeo no YouTube
 * 2. Copie a URL (ex: https://www.youtube.com/watch?v=ABC123)
 * 3. Extraia o ID (ABC123 - a parte depois do "v=")
 * 4. Adicione no array movies[] no script.js
 * 5. O sistema aplicará automaticamente a thumbnail!
 * 
 * THUMBNAILS DISPONÍVEIS:
 * - maxresdefault.jpg (melhor qualidade - 1280x720)
 * - hqdefault.jpg (alta qualidade - 480x360)
 * - mqdefault.jpg (média qualidade - 320x180)
 * - sddefault.jpg (qualidade padrão - 640x480)
 * 
 * DICA: Use 'maxresdefault.jpg' para melhor qualidade
 */
