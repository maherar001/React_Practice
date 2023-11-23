const Home = () => {
    const handleClick = (e) =>  {
        console.log('Hello clicker', e);
    }

    const handleClickagain = (name1, e) =>  {
        console.log('Hello ' + name1 , " and " + e.className);
    }
    return ( 
        <div className="home">
            <h1>Home Page...!</h1>
            <button onClick={handleClick}>Click Me</button>
            
            <button onClick={(e) => handleClickagain('Hafiz', e) }>Click Me Again</button>
        </div>    

     );
}
 
export default Home;