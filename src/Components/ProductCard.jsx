import React, { useState } from "react";

const ProductCard = ({
  Value,
  setValue,
  item,
  price,
  stock,
  index,
  id,
  option,
  ratings,
}) => {
  const [status, setStatus] = useState(true);
  const addToCart = () => {
    setValue((Value = Value + 1));
    setStatus(false);
  };
  const removeFromCart = () => {
    setValue((Value = Value - 1));
    setStatus(true);
  };
  return (
    <div className="style col-md-6 col-lg-4 col-xl-3 mt-5" key={index}>
      <div>
          <div className="card h-100 ">
            {/* <!-- Product image--> */}
            {console.log(item)}
            {stock ? (
              <div
                className="badge bg-dark text-white position-absolute text-black d-flex justify-content-end "
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            ) : (
              ""
            )}
            <img
              className="card-img-top"
              src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
              alt="..."
            />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{item}</h5>
                {/* <!-- Product price--> */}
                {price}
                <h5 className="fw-bolder">{stock}</h5>
                <div>{ratings ? "⭐⭐⭐⭐⭐" : ""}</div>
                {/* <!-- Product price--> */}
              </div>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {/* <a className="btn btn-outline-dark mt-auto" href="#"> */}
                {option ? (
                  status ? (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      onClick={addToCart}
                      type="submit"
                    >
                      Add To Cart
                    </a>
                  ) : (
                    <a
                      className="btn btn-outline-dark mt-auto"
                      onClick={removeFromCart}
                      type="submit"
                    >
                      remove From Cart
                    </a>
                  )
                ) : (
                  <a className="btn btn-outline-dark mt-auto" type="submit">
                    view Option
                  </a>
                )}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
//             import React from "react";

// const ProductCard = ({ Value, setValue }) => {
//   return (
//     <div>
//       <section className="py-5">
//         <div className="container px-4 px-lg-5 mt-5">
//           <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Fancy Product</h5>
//                     {/* <!-- Product price--> */}
//                     $40.00 - $80.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       View options
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Sale badge--> */}
//                 <div
//                   className="badge bg-dark text-white position-absolute"
//                   style={{ top: "0.5rem", right: "0.5rem" }}
//                 >
//                   Sale
//                 </div>
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Special Item</h5>
//                     {/* <!-- Product reviews--> */}
//                     <div className="d-flex justify-content-center small text-warning mb-2">
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                     </div>
//                     {/* <!-- Product price--> */}
//                     <span className="text-muted text-decoration-line-through">
//                       $20.00
//                     </span>
//                     $18.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       {Value > 0 ? (
//                         <a onClick={() => setValue(Value - 1)}>
//                           Remove Cart
//                         </a>
//                       ) : (
//                         <a onClick={() => setValue(Value + 1)}>
//                           Add To Cart
//                         </a>
//                       )}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Sale badge--> */}
//                 <div
//                   className="badge bg-dark text-white position-absolute"
//                   style={{ top: "0.5rem", right: " 0.5rem" }}
//                 >
//                   Sale
//                 </div>
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Sale Item</h5>
//                     {/* <!-- Product price--> */}
//                     <span className="text-muted text-decoration-line-through">
//                       $50.00
//                     </span>
//                     $25.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Popular Item</h5>
//                     {/* <!-- Product reviews--> */}
//                     <div className="d-flex justify-content-center small text-warning mb-2">
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                     </div>
//                     {/* <!-- Product price--> */}
//                     $40.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Sale badge--> */}
//                 <div
//                   className="badge bg-dark text-white position-absolute"
//                   style={{ top: "0.5rem", right: "0.5rem" }}
//                 >
//                   Sale
//                 </div>
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Sale Item</h5>
//                     {/* <!-- Product price--> */}
//                     <span className="text-muted text-decoration-line-through">
//                       $50.00
//                     </span>
//                     $25.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Fancy Product</h5>
//                     {/* <!-- Product price--> */}
//                     $120.00 - $280.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       View options
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Sale badge--> */}
//                 <div
//                   className="badge bg-dark text-white position-absolute"
//                   style={{ top: "0.5rem", right: "0.5rem" }}
//                 >
//                   Sale
//                 </div>
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Special Item</h5>
//                     {/* <!-- Product reviews--> */}
//                     <div className="d-flex justify-content-center small text-warning mb-2">
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                     </div>
//                     {/* <!-- Product price--> */}
//                     <span className="text-muted text-decoration-line-through">
//                       $20.00
//                     </span>
//                     $18.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col mb-5">
//               <div className="card h-100">
//                 {/* <!-- Product image--> */}
//                 <img
//                   className="card-img-top"
//                   src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
//                   alt="..."
//                 />
//                 {/* <!-- Product details--> */}
//                 <div className="card-body p-4">
//                   <div className="text-center">
//                     {/* <!-- Product name--> */}
//                     <h5 className="fw-bolder">Popular Item</h5>
//                     {/* <!-- Product reviews--> */}
//                     <div className="d-flex justify-content-center small text-warning mb-2">
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                       <div className="bi-star-fill"></div>
//                     </div>
//                     {/* <!-- Product price--> */}
//                     $40.00
//                   </div>
//                 </div>
//                 {/* <!-- Product actions--> */}
//                 <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                   <div className="text-center">
//                     <a className="btn btn-outline-dark mt-auto" href="#">
//                       Add to cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductCard;
