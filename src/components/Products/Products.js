import React from "react";
import Main from "../main/Main";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Mobiles",
    price: "$122-$400",
    sale: true,
    start: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Watch",
    price: "$122",
    sale: false,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80",
    title: "Shoes",
    price: "$100",
    sale: false,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "T-shirts",
    price: "$8",
    sale: true,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGxhcHRvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "Laptops",
    price: "$700",
    sale: true,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    title: "Headphones",
    price: "$400",
    sale: false,
  },
];

const Products = (props) => {
  const {onAdd}=props
  return (
    <>
      {products.map((item) => {
        return (
          <>
          <section className="container px-4 py-4 px-lg-5 mt-5">
          <div className="row gx-6 gx-lg-5 row-cols-2 row-cols-md-1 row-cols-xl-2 justify-content-center">
          <div className="col mb-5">
          <div className="card h-100">
                  <Main
                    key={item.id}
                    start={item.start}
                    img={item.image}
                    title={item.title}
                    price={item.price}
                    onAdd={onAdd}
                    options="Add to cart"
                    sale={item.sale}
                    />
                    </div>
                    </div>
                    </div>
                    </section>
          </>
        );
      })}
    </>
  );
};

export default Products;
