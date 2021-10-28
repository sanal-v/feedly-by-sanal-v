import Dashboard from "./Landing/Dashboard"

const Home =() =>{
    return(
    <div>
        <Dashboard category="national" />
        <Dashboard category="world"/>
        <Dashboard category="business"/>
        <Dashboard category="sports"/>
    </div>
    )
}

export default Home