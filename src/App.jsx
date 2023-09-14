import { useEffect, useState } from 'react'
import './App.css'
import  Tmdb from './Tmdb'
import MovieRow from './componentes/MovieRow/MovieRow';
import FeatureMovie from './componentes/FeatureMovie/FeatureMovie';
import Header from './componentes/Header';




function App() {
 /* 
  UseEffect: tudo que está dentro deste Hook é renderizado quando carrega a aplicação.
 */
const [movieList, setMovieList] = useState([]);
const [featuredData, setFeaturedData] = useState([]);
const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () =>{
      // pegar a lista de todos os filmes 
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      //pegando o filme em destaqued featured
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

       setFeaturedData(chosenInfo)
      
    }

    loadAll();

  }, []);

    useEffect(() =>{
       const scrollListener = () => {
        if(window.scrollY > 10) {
           setBlackHeader(true);
        } else{
           setBlackHeader(false);
        }
       }

       window.addEventListener('scroll', scrollListener);

       return () => {
         window.removeEventListener('scroll', scrollListener);
       }

    }, [])
  

  return (
    

      <div className='page'>
        <Header black={blackHeader}/>
     
        {featuredData &&
          <FeatureMovie item={featuredData}/>
        }

        <section className='lists'>
          {movieList.map((item, key)=>(
              <MovieRow 
               key={key}
               title={item.title}
               items={item.items}
               />

          ))}

        </section>

        <footer>
         <h3>Desenvolvido por Gisele França</h3>
          <div className='footer--links'>
            <a href="https://github.com/Gisa99"><img src='public/imagem/github.png' alt="Logo Github" target="_blank"/></a>

            <a href="https://www.linkedin.com/in/giselefranca-devfrontend/" target="_blank"><img src='public/imagem/linkedin.png' alt="Logo Github"/></a>

          </div>
          
          <p>Direitos de imagem para Netflix</p>
          <p>Dados pegos do site Themoviedb.org</p>
        </footer>

        {movieList.length <= 0 &&
          <div className='loading'> 
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando..." />
       </div>
        }
        
        
      </div>
    
   
  )
}

export default App
