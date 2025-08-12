export default function handler(req, res){
    const projetos = [
        {
            id: 1,
            nome: "Plataforma interativa de filmes",
            descricao: "Plataforma interativa de descoberta de filmes, integrada a uma API externa para exibir informações atualizadas. O usuário pode explorar detalhes e criar sua própria lista personalizada de favoritos.",
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
            nome: "Gestão de pedidos para restaurantes",
            descricao: "Sistema completo para gerenciamento de restaurantes, com cadastro de produtos e categorias, controle de pedidos em andamento e aplicativo mobile exclusivo para garçons realizarem abertura de mesas e adição de pedidos.",
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
            nome: "Lista de tarefas colaborativa",
            descricao: "Plataforma de gerenciamento de tarefas onde, além de criar listas pessoais, é possível torná-las públicas para que outras pessoas visualizem e interajam por meio de comentários.",
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
                }
                
            ],
            vercel: "https://tasksplus-omega.vercel.app/",
            github: "https://github.com/nathalliavieira/tasksplus",
        },
        {
            id: 4,
            nome: "Aplicação web para compra e venda de veículos",
            descricao: "Plataforma digital para compra e venda de carros, com login, gerenciamento de anúncios e visualização dos veículos disponíveis.",
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

    res.status(200).json(projetos);
}