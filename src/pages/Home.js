import HomeCard from "../components/home/HomeCard";
import {cards} from "./../helpers/homeCardsList";

const Home = () => {
  return (
    <main className="landing-body">
      <article className="main-section">
        <h1 className="landing-title">Оберіть варіант входу</h1>
        <div className="main-section-wrapper">
          {cards.map((card, index) => {
            return (<HomeCard key={index} type={card.type} link={card.link} text={card.text}/>)
          })}
        </div>
      </article>
    </main>
  );
};

export default Home;
