import React, { useState } from 'react'
import "./home.css";
import GameItem from '../../components/gameItem'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/games/reducer'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const GAMES = [
  {
    image: '/game-covers/forza_5.jpeg',
    title: 'Forza Horizon 5',
    genres: ['Гонки', 'Симулятор', 'Открытый мир'],
    price: 2343,
    video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
    id: 1,
    description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: '/game-covers/battlefield_2042.jpg',
    title: 'Battlefield 2042',
    genres: ['Экшен', 'Шутер', 'Война'],
    video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
    price: 2433,
    id: 2,
    description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
  },
  {
    image: '/game-covers/life_is_strange_true_colors.jpeg',
    title: 'Life is Strange True Colors',
    genres: ['Глубокий сюжет', 'Протагонистка'],
    video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
    price: 3021,
    id: 3,
    description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
  },
  {
    image: '/game-covers/gta_v.jpeg',
    title: 'Grand Theft Auto V',
    genres: ['Открытый мир', 'Экшен'],
    video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
    price: 789,
    id: 4,
    description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
  },
  {
    image: '/game-covers/rainbow_siege.jpeg',
    title: 'Tom Clancy\'s Rainbow Six® Siege',
    video: 'https://www.youtube.com/embed/6wlvYh0h63k',
    genres: ['Тактика', 'Шутер'],
    price: 982,
    id: 5,
    description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
  },
  {
    image: '/game-covers/assassins_creed_valhalla.png',
    title: 'Assassin’s Creed Valhalla',
    genres: ['Паркур', 'РПГ', 'Открытый мир'],
    video: 'https://www.youtube.com/embed/ssrNcwxALS4',
    price: 2863,
    id: 6,
    description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
  },
]

function Home (props) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.game.filter);

  const filtered = GAMES.filter(
    (item) => item.genres.indexOf(filter) > -1,
  );

  const handleDelete = () => {
    dispatch(setFilter(''))
  }

  return (
   <>
     <div className="home-filter">
       <input
         type="text"
         placeholder="поиск игры по жанру"
         className="home-input"
         value={filter}
         onChange={(e) => dispatch(setFilter(e.target.value[0].toUpperCase() + e.target.value.slice(1)))}
       />
       <AiOutlineCloseCircle
         size={25}
         className="home__close-icon"
         onClick={handleDelete}
       />
     </div>
     {filter.length === 0 ? (
       <div className="home">
         {GAMES.map(game => <GameItem game={game} key={game.id}/>)}
       </div>
     ) : (
       <div className="home">
         {filtered.map(game => <GameItem game={game} key={game.id}/>)}
       </div>
     )}
   </>
  )
}

export default Home;