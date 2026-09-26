import Icon from '../ui/Icon.jsx'
import { philosophyTags, education } from '../../data/about.js'

// image: importa una foto da src/assets (senza foto viene mostrato un placeholder)
function AboutProfile({ image }) {
  return (
    <section className="about-profile">
      <h2 className="section-heading" data-reveal>The philosophy & pedigree</h2>
      <ul className="tag-list" role="list" data-reveal style={{ '--i': 1 }}>
        {philosophyTags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>

      <article className="about-profile__card" data-reveal>
        <div className="about-profile__media">
          {image ? (
            <img className="about-profile__image" src={image} alt="Salvatore De Roma" />
          ) : (
            <div className="about-profile__placeholder" aria-hidden="true">
              <Icon name="image" size={48} />
            </div>
          )}
          <div className="about-profile__caption">
            <span className="about-profile__name">
              <Icon name="compass" size={16} /> Salvatore De Roma
            </span>
          </div>
        </div>

        <div className="about-profile__body">
          <h3 className="about-profile__title">Constructing digital products with structural honesty.</h3>
          <p className="about-profile__text">
            I’m a web developer based in Italy, passionate about turning ideas into fast,
            accessible, and well-designed websites. I build with HTML, CSS/Sass, JavaScript and
            React, focusing on clean code and interfaces that help brands communicate clearly.
          </p>

          <ul className="about-profile__education" role="list">
            {education.map((item) => (
              <li key={item.id} className="about-profile__education-item">
                <div>
                  <p className="about-profile__education-title">{item.title}</p>
                  <p className="about-profile__education-school">{item.school}</p>
                </div>
                <span className="tag">{item.status}</span>
              </li>
            ))}
          </ul>

          <blockquote className="about-profile__quote">
            <p>
              “A website is not merely a promotional facade — it is a foundational positioning
              asset and an engineering instrument.”
            </p>
            <footer className="about-profile__quote-footer">
              <span>— Salvatore De Roma</span>
              <span>Ref: ARCH-0924</span>
            </footer>
          </blockquote>

          <p className="about-profile__note">
            <Icon name="shield" size={18} className="about-profile__note-icon" />
            S. De Roma — Milan / Naples • CET — Practice Accredited 2025
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutProfile
