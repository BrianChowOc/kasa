import "../../styles/card.css";

function Card({ title, cover }) {
  return (
    <div className="CardContainer" style={{ backgroundImage: `url(${cover})` }}>
      {title}
    </div>
  );
}

export default Card;
