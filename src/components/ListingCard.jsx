export default function ListingCard({wine}) {

  // const {wine, image, title, location} = wine;

  console.log({ wine })

  return (
    <div className="card">
      <img src={wine.image} alt={wine.title} />
      <h3>{wine.wine}</h3>
      <p>{wine.location}</p>
      <p>{wine.winery}</p>
      <details className="detail">
        <summary>Ratings</summary>
          <p>{wine.rating.average}</p>
          <p>{wine.rating.reviews}</p>
      </details>
    </div>
  )

}