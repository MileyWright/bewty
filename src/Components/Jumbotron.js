
const Jumbotron = () => {
    return (
        <>
            <div className='banner'>
                <div className='left_div'>
                    <p>Your New Fresh And Effective Skincare Is Here.</p>
                    <p>We know life happens year round, but it's never been more important to stay home. That's why we are now offering access to primary care visits. </p>
                    <button>Add to Bag</button>
                </div>
                <img className='bannerImg' src={`${process.env.PUBLIC_URL}/assets/images/banner.png`} alt='Man'/>
            </div>
        </>
    )
}

export default Jumbotron;