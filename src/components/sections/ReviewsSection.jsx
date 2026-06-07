import { useState } from 'react'
import { reviewsSection } from '../../data/content'

export default function ReviewsSection() {
  const [active, setActive] = useState(0)
  const total = reviewsSection.images.length

  const prev = () => setActive((v) => (v === 0 ? total - 1 : v - 1))
  const next = () => setActive((v) => (v === total - 1 ? 0 : v + 1))

  return (
    <>
      <section className="t-rec t-rec--reviews-title">
        <div className="t-container">
          <p className="t-reviews__heading">
            <strong>{reviewsSection.title}</strong>
          </p>
        </div>
      </section>

      <section className="t-rec t-rec--reviews">
        <div className="t-reviews-slider">
          <button type="button" className="t-reviews-slider__arrow t-reviews-slider__arrow--prev" onClick={prev} aria-label="Предыдущий слайд">
            ‹
          </button>
          <div className="t-reviews-slider__viewport">
            {reviewsSection.images.map((src, index) => (
              <div
                key={src}
                className={`t-reviews-slider__slide ${index === active ? 'is-active' : ''}`}
                aria-hidden={index !== active}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>
          <button type="button" className="t-reviews-slider__arrow t-reviews-slider__arrow--next" onClick={next} aria-label="Следующий слайд">
            ›
          </button>
          <div className="t-reviews-slider__dots">
            {reviewsSection.images.map((src, index) => (
              <button
                key={src}
                type="button"
                className={index === active ? 'is-active' : ''}
                aria-label={`Перейти к слайду ${index + 1}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
