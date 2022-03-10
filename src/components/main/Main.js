import React from 'react'
import "./Main.css"
import Cart from "../Navbar/Navbar"
const Main = (props) => {
    
        const{onAdd}=props;
    

  return (
    <>
         {/* <!-- Section--> */}
        
                             {/* <!-- Sale badge--> */}
                             {props.sale && <div className="badge bg-dark text-white position-absolute">Sale</div>}
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src={props.img} alt={props.title} />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{props.title}</h5>
                                    {/* <!-- Product reviews--> */}
                                    {props.sale ||<div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                   
                                    </div>}
                                    {/* <!-- Product price--> */}
                                    {props.price}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#"  onClick={onAdd} >{props.options}</a></div>
                            </div>
                   
        </>
  )
}

export default Main