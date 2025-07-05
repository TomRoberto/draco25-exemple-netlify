import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <main>
      <h1>Page d'une offre dont l'id est : {id}</h1>
    </main>
  );
};

export default Offer;
