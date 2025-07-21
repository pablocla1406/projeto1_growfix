// Array de vídeos do Growflix
const movies = [
    {
        img: "https://img.youtube.com/vi/aJ-HZuLcKeA/maxresdefault.jpg",
        title: "Growcast #00 - Conheça a Growdev",
        link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
        category: "growcast",
        episode: "01",
        description: "Manoel Roldão conta tudo sobre a história da Growdev",
        duration: "42 min"
    },
    {
        img: "https://img.youtube.com/vi/ci1eQGPK89o/maxresdefault.jpg",
        title: "E o QA com isso?",
        link: "https://www.youtube.com/embed/ci1eQGPK89o",
        category: "growcast",
        episode: "02",
        description: "William Soares fala sobre Quality Assurance",
        duration: "38 min"
    },
    {
        img: "https://img.youtube.com/vi/WM7pGG7OicQ/maxresdefault.jpg",
        title: "E o QA lá fora?",
        link: "https://www.youtube.com/embed/WM7pGG7OicQ",
        category: "growcast",
        episode: "03",
        description: "Gabriel Soares fala sobre QA internacional",
        duration: "45 min"
    },
    {
        img: "https://img.youtube.com/vi/2c8VOBZ160Y/maxresdefault.jpg",
        title: "Conselho para TI",
        link: "https://www.youtube.com/embed/2c8VOBZ160Y",
        category: "growcast",
        episode: "04",
        description: "Dicas valiosas para quem está começando",
        duration: "32 min"
    },
    {
        img: "https://img.youtube.com/vi/mxnEm03cYPc/maxresdefault.jpg",
        title: "Agilidade Importa?",
        link: "https://www.youtube.com/embed/mxnEm03cYPc",
        category: "growcast",
        episode: "05",
        description: "Leandro Souza fala sobre metodologias ágeis",
        duration: "51 min"
    },
    {
        img: "https://img.youtube.com/vi/m7DyR07KrOE/maxresdefault.jpg",
        title: "Dois em Um",
        link: "https://www.youtube.com/embed/m7DyR07KrOE",
        category: "growcast",
        episode: "06",
        description: "Lucas e Daniele compartilham suas experiências",
        duration: "47 min"
    },
    {
        img: "https://img.youtube.com/vi/vW8G9KPwRL0/maxresdefault.jpg",
        title: "Lugar de Mulher",
        link: "https://www.youtube.com/embed/vW8G9KPwRL0",
        category: "growcast",
        episode: "07",
        description: "É na TI, ponto final!",
        duration: "40 min"
    },
    {
        img: "https://img.youtube.com/vi/_Ut2KqAqPyk/maxresdefault.jpg",
        title: "Como Desenvolver Talentos",
        link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
        category: "growcast",
        episode: "08",
        description: "Lucas Toniazzo fala sobre desenvolvimento de talentos para o mercado",
        duration: "48 min"
    },
    {
        img: "https://img.youtube.com/vi/dfDgs0Ive2Q/maxresdefault.jpg",
        title: "A Vivência de um Mentor",
        link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
        category: "growcast",
        episode: "09",
        description: "Dentro da célula de talentos",
        duration: "43 min"
    },
    // Webinar em Flutter
    {
        img: "https://img.youtube.com/vi/WKbLXuP9S-c/maxresdefault.jpg",
        title: "Recriando a interface do LinkedIn com Flutter",
        link: "https://www.youtube.com/embed/WKbLXuP9S-c",
        category: "webinar",
        episode: "01",
        description: "Aprenda a recriar a interface do LinkedIn usando Flutter",
        duration: "90 min"
    },
    {
        img: "https://img.youtube.com/vi/dJ6y1zMjVXU/maxresdefault.jpg",
        title: "Recriando a interface do Instagram com Flutter",
        link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
        category: "webinar",
        episode: "02",
        description: "Aprenda a recriar a interface do Instagram usando Flutter",
        duration: "85 min"
    },
    {
        img: "https://img.youtube.com/vi/8rdJsqUjsGg/maxresdefault.jpg",
        title: "Recriando o layout do WhatsApp com Flutter",
        link: "https://www.youtube.com/embed/8rdJsqUjsGg",
        category: "webinar",
        episode: "03",
        description: "Aprenda a recriar o layout do WhatsApp usando Flutter",
        duration: "95 min"
    },
    {
        img: "https://img.youtube.com/vi/C4p_7qBsECw/maxresdefault.jpg",
        title: "Webinar - Recriando a interface do iFood com Flutter",
        link: "https://www.youtube.com/embed/C4p_7qBsECw",
        category: "webinar",
        episode: "04",
        description: "Aprenda a recriar a interface do iFood usando Flutter",
        duration: "100 min"
    },
    {
        img: "https://img.youtube.com/vi/L1pKoMC6hWk/maxresdefault.jpg",
        title: "Flutter Avançado - Técnicas Profissionais",
        link: "https://www.youtube.com/embed/L1pKoMC6hWk",
        category: "webinar",
        episode: "05",
        description: "Técnicas avançadas de Flutter para desenvolvedores profissionais",
        duration: "120 min"
    },
    // Jornada UX/UI
    {
        img: "https://img.youtube.com/vi/-26aqPtgoEY/maxresdefault.jpg",
        title: "O UX/UI Design é para todos?",
        link: "https://www.youtube.com/embed/-26aqPtgoEY",
        category: "ux-ui",
        episode: "01",
        description: "Live de Lançamento sobre UX/UI Design para iniciantes",
        duration: "75 min"
    },
    {
        img: "https://img.youtube.com/vi/8sd3wuKTZMA/maxresdefault.jpg",
        title: "Como migrar para o UX/UI Design e se destacar",
        link: "https://www.youtube.com/embed/8sd3wuKTZMA",
        category: "ux-ui",
        episode: "02",
        description: "Estratégias para transição de carreira para UX/UI Design",
        duration: "80 min"
    },
    {
        img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/maxresdefault.jpg",
        title: "As oportunidades de estudar em um programa de tecnologia profissional",
        link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
        category: "ux-ui",
        episode: "03",
        description: "Oportunidades de formação profissional em tecnologia",
        duration: "85 min"
    },
    {
        img: "https://img.youtube.com/vi/cwqDu0ZzbYE/maxresdefault.jpg",
        title: "O profissional de UX/UI Design no mercado digital",
        link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
        category: "ux-ui",
        episode: "04",
        description: "Como se posicionar como UX/UI Designer no mercado",
        duration: "90 min"
    },
    {
        img: "https://img.youtube.com/vi/FiZMowbaiJA/maxresdefault.jpg",
        title: "O papel do UX/UI Designer no desenvolvimento de um produto digital",
        link: "https://www.youtube.com/embed/FiZMowbaiJA",
        category: "ux-ui",
        episode: "05",
        description: "A importância do UX/UI Designer no desenvolvimento de produtos",
        duration: "95 min"
    },
    // Diversos
    {
        img: "https://img.youtube.com/vi/QsuhYgsSYQo/maxresdefault.jpg",
        title: "Feedback do Parceiro - Safetech",
        link: "https://www.youtube.com/embed/QsuhYgsSYQo",
        category: "diversos",
        episode: "01",
        description: "É isso que as empresas falam dos nossos Growdevers",
        duration: "8 min"
    },
    {
        img: "https://img.youtube.com/vi/ouDn8z3PSqs/maxresdefault.jpg",
        title: "Como é o dia a dia de um Dev?",
        link: "https://www.youtube.com/embed/ouDn8z3PSqs",
        category: "diversos",
        episode: "02",
        description: "Conheça a rotina de trabalho de um desenvolvedor",
        duration: "12 min"
    },
    {
        img: "https://img.youtube.com/vi/cQDQNX6NXYo/maxresdefault.jpg",
        title: "Você sabe onde nossos alunos trabalham?",
        link: "https://www.youtube.com/embed/cQDQNX6NXYo",
        category: "diversos",
        episode: "03",
        description: "Descubra onde nossos ex-alunos estão trabalhando",
        duration: "10 min"
    },
    {
        img: "https://img.youtube.com/vi/nKGbolkirBM/maxresdefault.jpg",
        title: "Webinar Vagas 2021 - Paulo Marcon",
        link: "https://www.youtube.com/embed/nKGbolkirBM",
        category: "diversos",
        episode: "04",
        description: "Paulo Marcon, Gerente de Squads da Arezzo & Co",
        duration: "45 min"
    },
    {
        img: "https://img.youtube.com/vi/6sZPsqNjeek/maxresdefault.jpg",
        title: "Conheça a Arezzo",
        link: "https://www.youtube.com/embed/6sZPsqNjeek",
        category: "diversos",
        episode: "05",
        description: "Apresentação da empresa Arezzo & Co",
        duration: "15 min"
    }
    // Adicione mais vídeos aqui conforme necessário
];

// Custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Função para aplicar thumbnails dinamicamente aos cards
    function applyThumbnailsToCards() {
        // Cards de Growcast
        const growcastCards = document.querySelectorAll('#growcast .episode-card');
        applyThumbnailsToSection(growcastCards, 'growcast');
        
        // Cards de Webinar
        const webinarCards = document.querySelectorAll('#webinar-flutter .episode-card');
        applyThumbnailsToSection(webinarCards, 'webinar');
        
        // Cards de Jornada UX/UI
        const uxCards = document.querySelectorAll('#jornada-ux .episode-card');
        applyThumbnailsToSection(uxCards, 'ux-ui');
        
        // Cards de Diversos
        const diversosCards = document.querySelectorAll('#diversos .episode-card');
        applyThumbnailsToSection(diversosCards, 'diversos');
    }
    
    // Função auxiliar para aplicar thumbnails a uma seção específica
    function applyThumbnailsToSection(cards, category) {
        cards.forEach((card, index) => {
            const episodeBadge = card.querySelector('.episode-badge');
            const episodeThumbnail = card.querySelector('.episode-thumbnail');
            const hoverTitle = card.querySelector('.hover-episode-title');
            const hoverDescription = card.querySelector('.hover-episode-description');
            const hoverDuration = card.querySelector('.hover-episode-duration');
            
            if (episodeThumbnail) {
                let episodeNumber = null;
                
                if (episodeBadge) {
                    const badgeText = episodeBadge.textContent;
                    
                    if (badgeText.includes('WEBINAR')) {
                        // Para webinars, usar o índice + 1
                        episodeNumber = (index + 1).toString().padStart(2, '0');
                    } else if (badgeText.includes('AREZZO')) {
                        // Badge específico da Arezzo corresponde ao episódio 4 de diversos
                        episodeNumber = '04';
                    } else if (badgeText.includes('Jornada')) {
                        // Para jornada UX/UI, usar o índice + 1
                        episodeNumber = (index + 1).toString().padStart(2, '0');
                    } else if (category === 'diversos') {
                        // Para diversos, usar sempre o índice baseado na posição, não no badge
                        episodeNumber = (index + 1).toString().padStart(2, '0');
                    } else {
                        const episodeMatch = badgeText.match(/\d+/);
                        if (episodeMatch) {
                            episodeNumber = episodeMatch[0].padStart(2, '0');
                        }
                    }
                } else {
                    // Para cards sem badge, usar o índice + 1
                    episodeNumber = (index + 1).toString().padStart(2, '0');
                }
                
                if (episodeNumber) {
                    // Encontra o vídeo correspondente
                    const video = movies.find(movie => 
                        movie.category === category && movie.episode === episodeNumber
                    );
                    
                    if (video) {
                        // Remove classes de background CSS que podem interferir
                        episodeThumbnail.classList.remove('diversos-orange-bg', 'diversos-dev-bg', 'diversos-red-bg', 'diversos-blue-bg', 'diversos-large-bg');
                        
                        // Aplica a thumbnail como background
                        episodeThumbnail.style.backgroundImage = `url('${video.img}')`;
                        episodeThumbnail.style.backgroundSize = 'cover';
                        episodeThumbnail.style.backgroundPosition = 'center';
                        episodeThumbnail.style.backgroundRepeat = 'no-repeat';
                        
                        // Adiciona overlay para melhor legibilidade
                        if (!episodeThumbnail.classList.contains('with-cover')) {
                            episodeThumbnail.classList.add('with-cover');
                        }
                        
                        // Atualiza as informações do hover se existirem
                        if (hoverTitle) hoverTitle.textContent = video.title;
                        if (hoverDescription) hoverDescription.textContent = video.description;
                        if (hoverDuration) hoverDuration.textContent = video.duration;
                        
                        console.log(`Thumbnail aplicada para ${category} episódio ${episodeNumber}: ${video.title}`);
                    } else {
                        console.log(`Vídeo não encontrado para ${category} episódio ${episodeNumber}`);
                    }
                }
            }
        });
    }
    
    // Aplica thumbnails aos cards
    applyThumbnailsToCards();
    
    // Função de debug - remova em produção
    window.debugGrowflix = {
        // Listar todos os vídeos
        listVideos: () => {
            console.table(movies);
            return movies;
        },
        
        // Adicionar vídeo do YouTube facilmente
        addYouTubeVideo: (youtubeUrl, title, episodeNumber, description = "", duration = "") => {
            const video = createVideoFromUrl(youtubeUrl, title, "growcast", episodeNumber.toString().padStart(2, '0'), description, duration);
            if (video) {
                movies.push(video);
                applyThumbnailsToCards(); // Re-aplica as thumbnails
                console.log("Vídeo adicionado:", video);
                return video;
            } else {
                console.error("URL inválida do YouTube");
                return null;
            }
        },
        
        // Recarregar thumbnails
        reloadThumbnails: () => {
            applyThumbnailsToCards();
            console.log("Thumbnails recarregadas");
        },
        
        // Mostrar informações de debug
        showInfo: () => {
            console.log("=== DEBUG GROWFLIX ===");
            console.log(`Total de vídeos: ${movies.length}`);
            console.log(`Cards encontrados: ${document.querySelectorAll('.episode-card').length}`);
            console.log("Use debugGrowflix.addYouTubeVideo(url, titulo, episodio) para adicionar vídeos");
            console.log("Use debugGrowflix.listVideos() para ver todos os vídeos");
        }
    };
    
    // Mostra informações de debug no console
    console.log("=== GROWFLIX CARREGADO ===");
    console.log(`${movies.length} vídeo(s) carregado(s)`);
    console.log("Digite 'debugGrowflix.showInfo()' no console para mais informações");
    
    // FAQ functionality
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('.faq-icon-img');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Toggle icon rotation
            setTimeout(() => {
                const newState = this.getAttribute('aria-expanded') === 'true';
                if (newState) {
                    icon.style.transform = 'rotate(45deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }, 150);
        });
    });
    
    // Função para encontrar vídeo por categoria e episódio
    function findVideo(category, episode) {
        return movies.find(movie => 
            movie.category === category && movie.episode === episode
        );
    }
    
    // Função auxiliar para extrair ID do YouTube de uma URL
    function extractYouTubeId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
    
    // Função para criar objeto de vídeo a partir de URL do YouTube
    function createVideoFromUrl(youtubeUrl, title, category, episode, description = "", duration = "") {
        const videoId = extractYouTubeId(youtubeUrl);
        if (videoId) {
            return {
                img: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                title: title,
                link: `https://www.youtube.com/embed/${videoId}`,
                category: category,
                episode: episode,
                description: description,
                duration: duration
            };
        }
        return null;
    }
    
    // Função para criar e mostrar modal do vídeo
    function showVideoModal(video) {
        // Remove modal existente se houver
        const existingModal = document.getElementById('videoModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Cria o modal
        const modalHTML = `
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-body p-0 position-relative">
                            <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="top: 30px; right: 30px; z-index: 9999;"></button>
                            <div class="video-container-fullscreen">
                                <iframe src="${video.link}?autoplay=1" 
                                        title="${video.title}" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerpolicy="strict-origin-when-cross-origin" 
                                        allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Adiciona o modal ao DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Mostra o modal
        const modal = new bootstrap.Modal(document.getElementById('videoModal'));
        modal.show();
        
        // Remove o modal quando fechado para evitar conflitos
        document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
            this.remove();
        });
    }

    // Episode cards functionality
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        card.addEventListener('click', function() {
            // Here you can add navigation to specific episode page
            console.log('Episode clicked:', this.querySelector('.episode-title')?.textContent);
        });
    });
    
    // Play button functionality - VERSÃO DINÂMICA
    const playButtons = document.querySelectorAll('.hover-play-btn, .btn-play, .play-button, .episode-play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click
            
            // Encontra o card do episódio
            const episodeCard = this.closest('.episode-card') || this.closest('.featured-info') || this.closest('.featured-video-section');
            
            if (episodeCard) {
                // Determina a categoria baseada na seção
                let category = 'growcast';
                const webinarSection = episodeCard.closest('#webinar-flutter');
                const uxSection = episodeCard.closest('#jornada-ux');
                const diversosSection = episodeCard.closest('#diversos');
                
                if (webinarSection) {
                    category = 'webinar';
                } else if (uxSection) {
                    category = 'ux-ui';
                } else if (diversosSection) {
                    category = 'diversos';
                }
                
                // Tenta encontrar o episódio baseado no badge ou posição
                const episodeBadge = episodeCard.querySelector('.episode-badge');
                let episodeNumber = null;
                
                if (episodeBadge) {
                    const badgeText = episodeBadge.textContent;
                    
                    if (badgeText.includes('WEBINAR')) {
                        // Para webinars, determinar baseado na posição do card
                        const allWebinarCards = document.querySelectorAll('#webinar-flutter .episode-card');
                        const cardIndex = Array.from(allWebinarCards).indexOf(episodeCard);
                        episodeNumber = (cardIndex + 1).toString().padStart(2, '0');
                    } else if (badgeText.includes('Jornada')) {
                        // Para UX/UI, determinar baseado na posição do card
                        const allUxCards = document.querySelectorAll('#jornada-ux .episode-card');
                        const cardIndex = Array.from(allUxCards).indexOf(episodeCard);
                        episodeNumber = (cardIndex + 1).toString().padStart(2, '0');
                    } else if (badgeText.includes('AREZZO')) {
                        // Badge específico da Arezzo corresponde ao episódio 4 de diversos
                        episodeNumber = '04';
                    } else if (category === 'diversos') {
                        // Para diversos, usar sempre o índice baseado na posição, não no badge
                        const allDiversosCards = document.querySelectorAll('#diversos .episode-card');
                        const cardIndex = Array.from(allDiversosCards).indexOf(episodeCard);
                        episodeNumber = (cardIndex + 1).toString().padStart(2, '0');
                    } else {
                        const episodeMatch = badgeText.match(/\d+/);
                        if (episodeMatch) {
                            episodeNumber = episodeMatch[0].padStart(2, '0');
                        }
                    }
                } else {
                    // Para cards sem badge, usar o índice baseado na seção
                    if (category === 'webinar') {
                        episodeNumber = '04'; // iFood webinar
                    } else if (category === 'ux-ui') {
                        const allUxCards = document.querySelectorAll('#jornada-ux .episode-card');
                        const cardIndex = Array.from(allUxCards).indexOf(episodeCard);
                        episodeNumber = (cardIndex + 1).toString().padStart(2, '0');
                    } else if (category === 'diversos') {
                        const allDiversosCards = document.querySelectorAll('#diversos .episode-card');
                        const cardIndex = Array.from(allDiversosCards).indexOf(episodeCard);
                        episodeNumber = (cardIndex + 1).toString().padStart(2, '0');
                    }
                }
                
                if (episodeNumber) {
                    // Busca o vídeo no array
                    const video = findVideo(category, episodeNumber);
                    
                    if (video) {
                        showVideoModal(video);
                        console.log(`Reproduzindo: ${video.title}`);
                    } else {
                        console.log(`Vídeo não encontrado para ${category} episódio ${episodeNumber}`);
                        alert('Este vídeo ainda não está disponível. Adicione o ID do YouTube no array movies.');
                    }
                } else {
                    // Fallback para botão principal (banner)
                    const firstVideo = movies.find(movie => movie.category === category);
                    if (firstVideo) {
                        showVideoModal(firstVideo);
                    }
                }
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Update active nav link
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
