
export default function News({url,title}){
  

    return(
      <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center mb-4">
        <div className="card">
          <img src={url} className="card-img-top w-100 h-75" alt={title} />
          <div className="card-body">
            <p className="card-text">{title}</p>
          </div>
        </div>
        </div>
    )
}