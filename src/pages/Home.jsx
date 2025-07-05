import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Je suis la page d'accueil</h1>
      <a href="https://apollo.lereacteur.io/course/666c4b9450edb200153fc62c/67d2dfe19f57570015a5cd44">
        Lien vers apollo
      </a>
      <Link to="/details">Lien vers la page details</Link>
    </main>
  );
};

export default Home;
