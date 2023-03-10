
export default function Cards(){

    return (
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Jayson_Tatum_%2851839569977%29_%28cropped%29.jpg" className="d-block mvp rounded-circle" alt="Tatum" />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis et sem ultricies vehicula. Donec iaculis neque vel ullamcorper sollicitudin. Phasellus ut enim ut mi placerat tempor. Nunc rhoncus sem vel dictum placerat. 
                </p>
              </div>
              <div className="carousel-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg" className="d-block mvp rounded-circle" alt="Giannis"/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis et sem ultricies vehicula. Donec iaculis neque vel ullamcorper sollicitudin. Phasellus ut enim ut mi placerat tempor. Nunc rhoncus sem vel dictum placerat. 
                </p>
              </div>
              <div className="carousel-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nikola_Jokic_free_throw_%28cropped%29.jpg/800px-Nikola_Jokic_free_throw_%28cropped%29.jpg" className="d-block mvp rounded-circle" alt="Jokic"/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis et sem ultricies vehicula. Donec iaculis neque vel ullamcorper sollicitudin. Phasellus ut enim ut mi placerat tempor. Nunc rhoncus sem vel dictum placerat. 
                </p>
              </div>
            </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          </div>
        </div>
    )
}