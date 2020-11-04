
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
        </>
    )
}

export default Home;