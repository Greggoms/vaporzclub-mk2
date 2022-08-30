import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ProductsPageContainer } from "../css"

const ProductsPage = () => {
  return (
    <ProductsPageContainer>
      <StaticImage
        src="../images/products/products_background.jpg"
        alt="Vibrant Vape Cloud"
      />
      <div className="content">
        <h1>Featured Products</h1>
        <div className="products">
          <div className="products__product">
            <StaticImage
              src="../images/products/torch-flow-marshmallow-og.png"
              alt="Torch Flow"
            />
            <div className="description">
              <h2>Torch Live Resin Diamond 1g Disposable - Marshmallow OG</h2>
              <p>
                A creamy and gassy flavor accented by nutty honey and a touch of
                fruitiness. This indica dominant strain is a cross of Chemdawg D
                X Triangle Kush X Jet Fuel Gelato that produces this legendary
                flavor profile.
              </p>

              <div
                style={{
                  padding: "1rem",
                }}
              >
                <StaticImage
                  src="../images/products/new-flag.png"
                  alt="New!"
                  width={100}
                />
              </div>
            </div>
          </div>
          <div className="products__product">
            <StaticImage
              src="../images/products/yocan-uni-s.png"
              alt="Yocan Uni"
            />
            <div className="description">
              <h2>Yocan UNI S Box Mod Vaporizer</h2>
              <ul>
                <li>Durable Metallic Body</li>
                <li>Type-C Charging Technology</li>
                <li>Preset Temperature Settings</li>
                <li>Hanging Hole LED Indicator</li>
                <li>Adjustable Height and Width</li>
              </ul>
            </div>
          </div>
          <div className="products__product">
            <StaticImage
              src="../images/products/qurious_air-blueberry_key_lime.png"
              alt="Qurious Air Disposable"
            />
            <div className="description">
              <h2>Blueberry Key Lime by Qurious AIR 6000</h2>
              <p>
                The AIR 6000 from Qurious has a mesh coil, 13ml of juice (5% /
                50mg Salt Nicotine) and a rechargeable 600mah battery via a USB
                Type- C cable.
              </p>
              <div
                style={{
                  padding: "1rem",
                }}
              >
                <StaticImage
                  src="../images/products/new-flag.png"
                  alt="New!"
                  width={100}
                />
              </div>
            </div>
          </div>
          <div className="products__product">
            <StaticImage
              src="../images/products/juicehead-5k-watermelon_lime.png"
              alt="Juice Head 5k Bar"
            />
            <div className="description">
              <h2>Watermelon Lime by Juice Head</h2>
              <p>
                Introducing the Juice Head 5K device, the disposable that
                provides the longest-lasting experience on the market today.
                With up to 5000 puffs, you're sure to get your fill before it's
                time to choose another device from the 5K lineup of 9 unique and
                bold flavors.
              </p>
              <div
                style={{
                  padding: "1rem",
                }}
              >
                <StaticImage
                  src="../images/products/top_seller_icon.png"
                  alt="Top Seller"
                />
              </div>
            </div>
          </div>
          <div className="products__product">
            <StaticImage
              src="../images/products/smok-novo_2.png"
              alt="Juice Head 5k Bar"
            />
            <div className="description">
              <h2>SMOK NOVO 2 Pod System Kit 800mAh</h2>
              <ul>
                <li>System Kit 800mAh Battery Capacity: 800mAh</li>
                <li>LED Battery Indicator</li>
                <li>Input Voltage: (3.3V - 4.2V)</li>
                <li>Charging Current: Max- 0.55A</li>
                <li>Overcharge Voltage: 4.3V</li>
                <li>Overcharge Current: 1A</li>
                <li>Output Wattage: (6-25W)</li>
                <li>Charging Voltage: 5V</li>
                <li>E-liquid Capacity: 2mL</li>
                <li>Resistance of Pre-installed Pod: Mesh 1.0ohm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProductsPageContainer>
  )
}

export default ProductsPage
