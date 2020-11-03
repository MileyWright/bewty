
const Nav = () => {
    return(
        <>
            <div className='head'>
                <button>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/menu.png`} alt='hamburger_menu'/>
                </button>
                <div className='nav'>
                    <p>Product</p>
                    <p>Communities</p>
                    <p>Blog</p>
                    <p>Review</p>
                </div>
                
                <div className='title'>BEWTY</div>
                <div className='right_nav'>
                    <p>Favorites (01)</p>
                    <a href='#'>
                        <img className='shopping_cart'src={`${process.env.PUBLIC_URL}/assets/images/shopping-cart.png`} alt='shopping_cart'/>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Nav;