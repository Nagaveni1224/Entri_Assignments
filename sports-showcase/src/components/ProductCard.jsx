import "./ProductCard.css";

function ProductCard({ name, sport, image, available }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <p>{sport}</p>

        {available ? (
          <p className="active">Available</p>
        ) : (
          <p className="retired">Not Available</p>
        )}
      </div>
    </div>
  );
}

export default ProductCard;