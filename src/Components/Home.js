
const Home = () => {
    return (
        <>
            <div className='section_1'>
                <div className='left_products'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PDP_Kit2_Image5050_03.jpg`} alt='kit'/>
                    <p>Products</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare quam viverra orci sagittis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare.</p>
                </div>
                <div className='right_about'>
                    <p>About Us</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam. Enim sed faucibus turpis in. Leo urna molestie at elementum eu facilisis sed odio morbi. Et molestie ac feugiat sed lectus vestibulum. Morbi tristique senectus et netus et malesuada fames ac turpis.</p>
                    <button>Learn More</button>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PDP_GoodnightWrinkleCream_Text6040_02.webp`} alt='kit'/>
                </div>
            </div>
            
            <div className='section_2_head'>Best Seller Products</div>
            <div className='section_2'>
                <div className='card'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PDP_DHT_Plus_ImageLarge_01.jpg`} alt='shampoo'/>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/skin_product_MorningGlowSerum.webp`} alt='skincare'/>
                        <p className='card_title'>HAIR CARE —</p>
                        <p className='card_descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#'>Visit Store</a>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PDP_GoodnightWrinkleCream_ImageLarge_01.jpg`} />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/skin_product_MorningGlowSerum.webp`} alt='skincare'/>
                        <p className='card_title'>MOISTURISER —</p>
                        <p className='card_descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#'>Visit Store</a>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/11_Hims_Skin_PLP_AgingCanBeScary_Resized.webp`} />
                        <img src={`${process.env.PUBLIC_URL}/assets/images/skin_product_MorningGlowSerum.webp`} alt='skincare'/>
                        <p className='card_title'>BEARD LOVE —</p>
                        <p className='card_descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#'>Visit Store</a>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PLP_Skin_Text5050_02.webp`}/>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/skin_product_MorningGlowSerum.webp`} alt='skincare'/>
                        <p className='card_title'>SKIN CARE —</p>
                        <p className='card_descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#'>Visit Store</a>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/Hims-PDP-Skin-AntiAging-04-FullBleedImage-_Application.png`}/>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/skin_product_MorningGlowSerum.webp`} alt='skincare'/>
                        <p className='card_title'>CARE CURLY —</p>
                        <p className='card_descript'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <a href='#'>Visit Store</a>
                    </div>
                </div>
                <div className='card'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/viewmore.png`}/>
                </div>
            </div>

            <div className='section_3'>
                <p className='section_3_title'>BEWTY In Instagram</p>
                <div className='slide'>
                <img src={`${process.env.PUBLIC_URL}/assets/images/should-you-use-vitamin-c-serum.jpg`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/Hims_PDP_Kit2_Image5050_04-30ct.jpg`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/instragram.png`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/can-tretinoin-remove-blackheads.jpg`}/>
                <img src={`${process.env.PUBLIC_URL}/assets/images/02_Hims_Skin_PDP_Acne_fighting.jpg`}/>
                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/images/button.png`}/>
                <div></div>
            </div>
        </>
    )
}

export default Home;