import "../styling/Footer.css"

function Footer (){

    return(
        <div className="footer-container">
            <div className="border-line">
                <ul className="footer-links">
                    <a className="items footer" href="/nutrition">Nutrition</a>
                    <a className="items footer" href="/workouts">Workouts</a>
                    <a className="items footer"href="/analytics">Analytics</a>
                    <a className="items footer" href="/#">Sign In</a>
                    <a className="items footer" href="/#">Contact Us</a>
                </ul> 
            </div>
        </div>
    )
} 

export default Footer