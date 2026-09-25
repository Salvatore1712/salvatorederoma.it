function Card({ title, text, number, children }) {
  return (
    <article className="card">
      
      <div className="card__body">
        <p className="card__number">{number}</p>
        <h3 className="card__title">{title}</h3>
        {text && <p className="card__text">{text}</p>}
        {children}
      </div>
    </article>
  )
}

export default Card
