import React from "react";

function Home (){
    return(
        <div className="bg-info p-2 text-dark bg-opacity-25 text-center d-flex p-2">
            <main className="gato-portada puff-in-center flex-fill">
                <h1 className="title__main text-pop-up-top" >Caterpi</h1>
                <img src="images/cat.png" className="img-fluid" alt="cat" />
            </main>
        </div>
    )
}

export default Home;