
    function showVideoModal(video) {
        const existingModal = document.getElementById('videoModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        const modalHTML = `
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-body p-0 position-relative">
                            <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="top: 30px; right: 30px; z-index: 9999; width: 48px; height: 48px; font-size: 24px;"></button>
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
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const modal = new bootstrap.Modal(document.getElementById('videoModal'));
        modal.show();
        
        document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
            this.remove();
        });
    }

    const episodiosMovies = [
        {
            img: "https://img.youtube.com/vi/aJ-HZuLcKeA/maxresdefault.jpg",
            title: "Growcast #00 - Conheça a Growdev",
            category: "growcast",
            episode: "00",
            description: "Manoel Roldão conta tudo sobre a história da Growdev",
            link: "https://www.youtube.com/embed/aJ-HZuLcKeA"
        },
        {
            img: "https://img.youtube.com/vi/7OWT3lfHYvE/maxresdefault.jpg",
            title: "Growcast #01 - As profissiões do futuro",
            category: "growcast",
            episode: "01",
            description: "William Soares fala sobre Quality Assurance",
            link: "https://www.youtube.com/embed/7OWT3lfHYvE"
        },
        {
            img: "https://img.youtube.com/vi/ci1eQGPK89o/maxresdefault.jpg",
            title: "E o QA com isso?",
            category: "growcast",
            episode: "02",
            description: "Gabriel Soares fala sobre QA internacional",
            link: "https://www.youtube.com/embed/ci1eQGPK89o"
        },
        {
            img: "https://img.youtube.com/vi/WM7pGG7OicQ/maxresdefault.jpg",
            title: "E o QA lá fora?",
            category: "growcast",
            episode: "03",
            description: "Dicas valiosas para quem está começando",
            link: "https://www.youtube.com/embed/WM7pGG7OicQ"
        },
        {
            img: "https://img.youtube.com/vi/2c8VOBZ160Y/maxresdefault.jpg",
            title: "Conselho para TI",
            category: "growcast",
            episode: "04",
            description: "Leandro Souza fala sobre metodologias ágeis",
            link: "https://www.youtube.com/embed/2c8VOBZ160Y"
        },
        {
            img: "https://img.youtube.com/vi/mxnEm03cYPc/maxresdefault.jpg",
            title: "Agilidade Importa?",
            category: "growcast",
            episode: "05",
            description: "Lucas e Daniele compartilham suas experiências",
            link: "https://www.youtube.com/embed/mxnEm03cYPc"
        },
        {
            img: "https://img.youtube.com/vi/m7DyR07KrOE/maxresdefault.jpg",
            title: "Dois em Um",
            category: "growcast",
            episode: "06",
            description: "É na TI, ponto final!",
            link: "https://www.youtube.com/embed/m7DyR07KrOE"
        },
        {
            img: "https://img.youtube.com/vi/vW8G9KPwRL0/maxresdefault.jpg",
            title: "Lugar de Mulher",
            category: "growcast",
            episode: "07",
            description: "Lucas Toniazzo fala sobre desenvolvimento de talentos para o mercado",
            link: "https://www.youtube.com/embed/vW8G9KPwRL0"
        },
        {
            img: "https://img.youtube.com/vi/_Ut2KqAqPyk/maxresdefault.jpg",
            title: "Como Desenvolver Talentos",
            category: "growcast",
            episode: "08",
            description: "Como Desenvolver Talentos",
            link: "https://www.youtube.com/embed/_Ut2KqAqPyk"
        },
        {
            img: "https://img.youtube.com/vi/dfDgs0Ive2Q/maxresdefault.jpg",
            title: "A Vivência de um Mentor",
            category: "growcast",
            episode: "09",
            description: "Dentro da célula de talentos",
            link: "https://www.youtube.com/embed/dfDgs0Ive2Q"
        },
        {
            img: "https://img.youtube.com/vi/WKbLXuP9S-c/maxresdefault.jpg",
            title: "Recriando a interface do LinkedIn com Flutter",
            category: "webinar",
            episode: "01",
            description: "Aprenda a recriar a interface do LinkedIn usando Flutter",
            link: "https://www.youtube.com/embed/WKbLXuP9S-c"
        },
        {
            img: "https://img.youtube.com/vi/dJ6y1zMjVXU/maxresdefault.jpg",
            title: "Recriando a interface do Instagram com Flutter",
            category: "webinar",
            episode: "02",
            description: "Aprenda a recriar a interface do Instagram usando Flutter",
            link: "https://www.youtube.com/embed/dJ6y1zMjVXU"
        },
        {
            img: "https://img.youtube.com/vi/8rdJsqUjsGg/maxresdefault.jpg",
            title: "Recriando o layout do WhatsApp com Flutter",
            category: "webinar",
            episode: "03",
            description: "Aprenda a recriar o layout do WhatsApp usando Flutter",
            link: "https://www.youtube.com/embed/8rdJsqUjsGg"
        },
        {
            img: "https://img.youtube.com/vi/C4p_7qBsECw/maxresdefault.jpg",
            title: "Webinar - Recriando a interface do iFood com Flutter",
            category: "webinar",
            episode: "04",
            description: "Aprenda a recriar a interface do iFood usando Flutter",
            link: "https://www.youtube.com/embed/C4p_7qBsECw"
        },
        {
            img: "https://img.youtube.com/vi/L1pKoMC6hWk/maxresdefault.jpg",
            title: "Flutter Avançado - Técnicas Profissionais",
            category: "webinar",
            episode: "05",
            description: "Técnicas avançadas de Flutter para desenvolvedores profissionais",
            link: "https://www.youtube.com/embed/L1pKoMC6hWk"
        },
        {
            img: "https://img.youtube.com/vi/-26aqPtgoEY/maxresdefault.jpg",
            title: "O UX/UI Design é para todos?",
            category: "ux-ui",
            episode: "01",
            description: "Live de Lançamento sobre UX/UI Design para iniciantes",
            link: "https://www.youtube.com/embed/-26aqPtgoEY"
        },
        {
            img: "https://img.youtube.com/vi/8sd3wuKTZMA/maxresdefault.jpg",
            title: "Como migrar para o UX/UI Design e se destacar",
            category: "ux-ui",
            episode: "02",
            description: "Estratégias para transição de carreira para UX/UI Design",
            link: "https://www.youtube.com/embed/8sd3wuKTZMA"
        },
        {
            img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/maxresdefault.jpg",
            title: "As oportunidades de estudar em um programa de tecnologia profissional",
            category: "ux-ui",
            episode: "03",
            description: "Oportunidades de formação profissional em tecnologia",
            link: "https://www.youtube.com/embed/ZMZjQ9aRuIY"
        },
        {
            img: "https://img.youtube.com/vi/cwqDu0ZzbYE/maxresdefault.jpg",
            title: "O profissional de UX/UI Design no mercado digital",
            category: "ux-ui",
            episode: "04",
            description: "Como se posicionar como UX/UI Designer no mercado",
            link: "https://www.youtube.com/embed/cwqDu0ZzbYE"
        },
        {
            img: "https://img.youtube.com/vi/FiZMowbaiJA/maxresdefault.jpg",
            title: "O papel do UX/UI Designer no desenvolvimento de um produto digital",
            category: "ux-ui",
            episode: "05",
            description: "A importância do UX/UI Designer no desenvolvimento de produtos",
            link: "https://www.youtube.com/embed/FiZMowbaiJA"
        },
        {
            img: "https://img.youtube.com/vi/QsuhYgsSYQo/maxresdefault.jpg",
            title: "Feedback do Parceiro - Safetech",
            category: "diversos",
            episode: "01",
            description: "É isso que as empresas falam dos nossos Growdevers",
            link: "https://www.youtube.com/embed/QsuhYgsSYQo"
        },
        {
            img: "https://img.youtube.com/vi/ouDn8z3PSqs/maxresdefault.jpg",
            title: "Como é o dia a dia de um Dev?",
            category: "diversos",
            episode: "02",
            description: "Conheça a rotina de trabalho de um desenvolvedor",
            link: "https://www.youtube.com/embed/ouDn8z3PSqs"
        },
        {
            img: "https://img.youtube.com/vi/cQDQNX6NXYo/maxresdefault.jpg",
            title: "Você sabe onde nossos alunos trabalham?",
            category: "diversos",
            episode: "03",
            description: "Descubra onde nossos ex-alunos estão trabalhando",
            link: "https://www.youtube.com/embed/cQDQNX6NXYo"
        },
        {
            img: "https://img.youtube.com/vi/nKGbolkirBM/maxresdefault.jpg",
            title: "Webinar Vagas 2021 - Paulo Marcon",
            category: "diversos",
            episode: "04",
            description: "Paulo Marcon, Gerente de Squads da Arezzo & Co",
            link: "https://www.youtube.com/embed/nKGbolkirBM"
        },
        {
            img: "https://img.youtube.com/vi/6sZPsqNjeek/maxresdefault.jpg",
            title: "Conheça a Arezzo",
            category: "diversos",
            episode: "05",
            description: "Apresentação da empresa Arezzo & Co",
            link: "https://www.youtube.com/embed/6sZPsqNjeek"
        }
    ];

    if (document.querySelector('.episodes-page')) {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach((card, index) => {
            if (episodiosMovies[index]) {
                const thumbnail = card.querySelector('.card-thumbnail');
                const movie = episodiosMovies[index];
                
                thumbnail.style.backgroundImage = `url('${movie.img}')`;
                thumbnail.style.backgroundSize = 'cover';
                thumbnail.style.backgroundPosition = 'center';
                thumbnail.style.backgroundRepeat = 'no-repeat';
                
                thumbnail.style.background = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('${movie.img}')`;
                thumbnail.style.backgroundSize = 'cover';
                thumbnail.style.backgroundPosition = 'center';
                
                if (!card.querySelector('.hover-overlay')) {
                    const hoverOverlay = document.createElement('div');
                    hoverOverlay.className = 'hover-overlay';
                    hoverOverlay.innerHTML = `
                        <button class="hover-play-btn">▶</button>
                        <h4 class="hover-episode-title">${movie.title}</h4>
                    `;
                    thumbnail.appendChild(hoverOverlay);
                }
                
                const playBtn = card.querySelector('.hover-play-btn');
                if (playBtn) {
                    playBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        showVideoModal(movie);
                    });
                }
                
                card.addEventListener('click', function() {
                    showVideoModal(movie);
                });
            }
        });
        
        const mainPlayBtn = document.querySelector('.btn-play');
        if (mainPlayBtn) {
            mainPlayBtn.addEventListener('click', function() {
                if (episodiosMovies[1]) {
                    showVideoModal(episodiosMovies[1]);
                }
            });
        }
    }