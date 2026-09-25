function Card({ title, text, number, children, ...props }) {
  return (
    <article className="card" {...props}>
      
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
