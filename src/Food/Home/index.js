import '../style.css'
import Nav from '../Nav'

function Home() {
    return (

        <div className='body'>
            <div><Nav /></div>
            <div className="food-title">
                FoodFinder
            </div>

            <div className='food-header-text'>Find recipes and share your thoughts with our community of FoodFinders</div>
            <div className='food-subtitle'>Trending Recipes</div>

            <div className="trending-foods-grid">
                <div className="one">
                    <img src="https://www.themealdb.com//images//media//meals//wvpsxx1468256321.jpg" className='trending-foods-img' />
                </div>
                <div className="two">
                    <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/wxywrq1468235067.jpg" className='trending-foods-img' />
                </div>
                <div className="three">
                    <img src="https:\/\/www.themealdb.com\/images\/media\/meals\/xwutvy1511555540.jpg" className='trending-foods-img' />
                </div>
            </div>
            <div className='food-subtitle'>Recently Viewed Recipes</div>
        </div>
    );
}

export default Home;