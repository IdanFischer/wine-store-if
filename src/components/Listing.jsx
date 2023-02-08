import { useEffect, useState } from "react"
import ListingCard from "./ListingCard";

export default function Listing() {
  const [wines, setWines] = useState();
  const [types, setTypes] = useState('whites');

  useEffect(() => {
    fetch(`https://api.sampleapis.com/wines/${types}`)
      .then(res => res.json())
      .then(setWines)
      .catch(console.error())
  }, [types])

  console.log({ wines })

  return (
    <>
      <div id="top-header">
        <header>
          <h1>Le Chateau </h1>
        </header>

        <nav>
          <button onClick={() => setTypes('whites')}>White</button>
          <button onClick={() => setTypes('reds')}>Red</button>
        </nav>
      </div>

      <div>
        {!wines
          ? (<h2>Welcome to the site, choose above.</h2>)
          : (<section className="flex-container">
            {wines.map((element) => {
              return <ListingCard key={element.id} wine={element} />
            })}
          </section>)
        }
      </div>
    </>
  )
}