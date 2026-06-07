import Separator from '../layout/Separator'

import { products } from '../../data/content'

import { getOrderWhatsAppUrl } from '../../lib/whatsapp'



export default function CatalogSection() {

  return (

    <div className="t-catalog">

      {products.map((product, index) => (

        <div key={`${product.name}-${product.volume}`}>

          {index > 0 ? <Separator /> : null}

          <section

            className="t-rec t-rec--product"

            id={index === 0 ? 'buy' : undefined}

          >

            <div className="t-product">

              <div className="t-product__image">

                <img src={product.image} alt={product.name} />

              </div>

              <div className="t-product__info">

                <p className="t-product__name">

                  <strong>{product.name}</strong>

                </p>

                <p className="t-product__volume">

                  <strong>{product.volume}</strong>

                </p>

                <div className="t-product__prices">

                  <span className="t-product__price">{product.price}</span>

                  <span className="t-product__currency">{product.currency}</span>

                  <span className="t-product__old-price">

                    {product.oldPrice}

                    <span className="t-product__currency"> {product.currency}</span>

                  </span>

                </div>

                <a

                  href={getOrderWhatsAppUrl()}

                  className="t-btn t-btnflex t-btnflex--buy"

                  target="_blank"

                  rel="noreferrer"

                >

                  Купить

                </a>

              </div>

            </div>

          </section>

        </div>

      ))}

    </div>

  )

}


