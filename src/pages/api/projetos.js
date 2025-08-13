export default function handler(req, res){
    const lang = req.query.lang?.toLowerCase() || "pt";

    const projetos = [
        {
            id: 1,
            nome: {
                pt: "Plataforma interativa de filmes",
                en: "Interactive movie platform",
                es: "Plataforma interactiva de películas"
            },
            descricao: {
                pt: "Plataforma interativa de descoberta de filmes, integrada a uma API externa para exibir informações atualizadas. O usuário pode explorar detalhes e criar sua própria lista personalizada de favoritos.",
                en: "Interactive movie discovery platform, integrated with an external API to display updated information. Users can explore the details and create their own personalized list of favorites.",
                es: "Plataforma interactiva de descubrimiento de películas, integrada con una API externa. El usuario puede explorar los detalles y crear su propia lista personalizada de favoritos."
            },
            tecnologias: "HTML | CSS | ReactJS",
            capa: "/projetoPrimeFlix.png",
            imagensDetalhes: [
                {
                    src: "/images/projetos/projetoPrimeFlix/home.png",
                    title: "Home"
                },
                {
                    src: "/images/projetos/projetoPrimeFlix/movieDetails.png",
                    title: "Movie Details"
                },
                {
                    src: "/images/projetos/projetoPrimeFlix/myMovies.png",
                    title: "Page My Movies"
                }
            ],
            vercel: "https://primeflix-dun.vercel.app/",
            github: "https://github.com/nathalliavieira/primeflix",
        },
        {
            id: 2,
            nome: {
                pt: "Gestão de pedidos para restaurantes",
                en: "Order management for restaurants",
                es: "Gestión de pedidos para restaurantes"
            },
            descricao: {
                pt: "Sistema completo para gerenciamento de restaurantes, com cadastro de produtos e categorias, controle de pedidos em andamento e aplicativo mobile exclusivo para garçons realizarem abertura de mesas e adição de pedidos.",
                en: "Complete system for restaurant management, with product and category registration, control of orders in progress and an exclusive mobile application for waiters to open tables and add orders.",
                es: "Sistema completo para la gestión de restaurantes, con registro de productos y categorías, control de pedidos en curso y aplicación móvil exclusiva para que los camareros puedan abrir mesas y añadir pedidos."
            },
            tecnologias: "HTML | Sass | ReactJS | NodeJS | Next.js | TypeScript",
            capa: "/projetoPizzaFlow.png",
            imagensDetalhes: [
                {
                    src: "/images/projetos/projetoPizzaFlow/login.png",
                    title: "Login"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/cadastro.png",
                    title: "Sign Up"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/categoryRegister.png",
                    title: "Category Register"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/productRegister.png",
                    title: "Product Register"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/dashboard.png",
                    title: "Last Orders"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/orderDetails.png",
                    title: "Order Details"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/loginMobile.png",
                    title: "Login-mobile"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/newRequest.png",
                    title: "New Request"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/request.png",
                    title: "Request"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/modalOpenCategory.png",
                    title: "Modal Open Category"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/modalOpenProducts.png",
                    title: "Modal Open Products"
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/request2.png",
                    title: "Request",
                },
                {
                    src: "/images/projetos/projetoPizzaFlow/finishing.png",
                    title: "Finishing"
                }
            ],
            vercel: "https://web-api-pizzaria.vercel.app/",
            github: "https://github.com/nathalliavieira/web-api-pizzaria",
        },
        {
            id: 3,
            nome: {
                pt: "Lista de tarefas colaborativa",
                en: "Collaborative to-do list",
                es: "Lista de tareas colaborativa"
            },
            descricao: {
                pt: "Plataforma de gerenciamento de tarefas onde, além de criar listas pessoais, é possível torná-las públicas para que outras pessoas visualizem e interajam por meio de comentários.",
                en: "A task management platform where, as well as creating personal lists, you can make them public for other people to view and interact with via comments.",
                es: "Plataforma de gestión de tareas en la que, además de crear listas personales, es posible hacerlas públicas para que otras personas las vean e interactúen mediante comentarios."
            },
            tecnologias: "HTML | CSS | ReactJS | Next.js | TypeScript",
            capa: "/projetoTaskPlus.png",
            imagensDetalhes: [
                {
                    src: "/images/projetos/projetoTaskPlus/home.png",
                    title: "Home"
                },
                {
                    src: "/images/projetos/projetoTaskPlus/dashboard.png",
                    title: "Dashboard"
                },
                {
                    src: "/images/projetos/projetoTaskPlus/sectionTaskDetails.png",
                    title: "Section Task Details"
                },
                {
                    src: "/images/projetos/projetoTaskPlus/allTasks.png",
                    title: "All tasks"
                }
            ],
            vercel: "https://tasksplus-omega.vercel.app/",
            github: "https://github.com/nathalliavieira/tasksplus",
        },
        {
            id: 4,
            nome: {
                pt: "Aplicação web para compra e venda de veículos",
                en: "Web application to buy and sell cars",
                es: "Aplicación web para la compra y venta de vehículos"
            },
            descricao: {
                pt: "Plataforma digital para compra e venda de carros, com login, gerenciamento de anúncios e visualização dos veículos disponíveis.",
                en: "Digital platform for buying and selling cars, with login, managing ads and viewing available vehicles.",
                es: "Plataforma digital para compra y venta de coches, con inicio de sesión, gestión de anuncios y visualización de los vehículos disponibles."
            },
            tecnologias: "HTML | Sass | ReactJS | NodeJS | Next.js | TypeScript",
            capa: "/projetoWebCars.png",
            imagensDetalhes: [
                {
                    src: "/images/projetos/projetoWebCars/home.png",
                    title: "Home"
                },
                {
                    src: "/images/projetos/projetoWebCars/login.png",
                    title: "Login"
                },
                {
                    src: "/images/projetos/projetoWebCars/signup.png",
                    title: "Sign up"
                },
                {
                    src: "/images/projetos/projetoWebCars/dashboard.png",
                    title: "Dashboard"
                },
                {
                    src: "/images/projetos/projetoWebCars/detailsCar.png",
                    title: "Car Details"
                },
                {
                    src: "/images/projetos/projetoWebCars/carRegister.png",
                    title: "Car Register"
                }
            ],
            vercel: "https://web-api-cars.vercel.app/",
            github: "https://github.com/nathalliavieira/web-api-cars",
        }
    ];

    const projetosTraduzidos = projetos.map(p => ({
        ...p,
        nome: p.nome[lang],
        descricao: p.descricao[lang]
    }));

    res.status(200).json(projetosTraduzidos);
}