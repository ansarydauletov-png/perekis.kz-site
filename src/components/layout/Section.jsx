export default function Section({
  id,
  title,
  titleAccent,
  className = '',
  containerClass = '',
  children,
}) {
  return (
    <section id={id} className={`t-rec ${className}`}>
      <div className={`t-container ${containerClass}`}>
        {title ? (
          <div className="t-section__title-wrap">
            <h2 className="t-section__title">{title}</h2>
            {titleAccent ? <p className="t-section__title-accent">{titleAccent}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  )
}
