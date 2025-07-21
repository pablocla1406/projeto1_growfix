// Script para extrair thumbnails de vídeos
// Este script usa ffmpeg para gerar thumbnails

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Função para extrair thumbnail de um vídeo
function extractThumbnail(videoPath, outputPath, timeStamp = '00:00:10') {
    const command = `ffmpeg -i "${videoPath}" -ss ${timeStamp} -vframes 1 -q:v 2 "${outputPath}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro: ${error}`);
            return;
        }
        console.log(`Thumbnail extraída: ${outputPath}`);
    });
}

// Exemplo de uso:
// extractThumbnail('path/to/video.mp4', 'assets/images/episode-01-thumb.jpg', '00:00:05');

// Lista de vídeos para processar
const episodes = [
    {
        video: 'path/to/episode-01.mp4',
        thumbnail: 'assets/images/episode-01-thumb.jpg',
        time: '00:00:10'
    },
    {
        video: 'path/to/episode-02.mp4', 
        thumbnail: 'assets/images/episode-02-thumb.jpg',
        time: '00:00:15'
    }
    // Adicione mais episódios aqui...
];

// Processar todos os episódios
episodes.forEach(episode => {
    if (fs.existsSync(episode.video)) {
        extractThumbnail(episode.video, episode.thumbnail, episode.time);
    } else {
        console.log(`Vídeo não encontrado: ${episode.video}`);
    }
});
