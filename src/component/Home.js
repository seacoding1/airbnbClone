import { Fragment } from "react"
import HomeCategory from "./HomeCategory";
import HomeList from "./HomeList";


const Home = () => {
    return (
        <Fragment>
            <HomeCategory/>
            <HomeList/>
        </Fragment>
    )
}

export default Home;