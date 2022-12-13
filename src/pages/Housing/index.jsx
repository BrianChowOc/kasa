import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import logementList from "../../datas/logementList";

function Housing() {
  const { id } = useParams();

  const logement = logementList.filter((appart) => {
    return appart.id === id;
  });

  return (
    <div>
      <Slideshow pictures={logement[0].pictures} />
    </div>
  );
}

export default Housing;
