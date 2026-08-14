import ProductList from "./components/ProductList";

function App() {

    const products = [
      {
        id: 1,
        name: "Laptop",
        price: 65000,
        category: "Electronics",
        image: "https://picsum.photos/200?1",
      },
      {
        id: 2,
        name: "Mobile",
        price: 25000,
        category: "Electronics",
        image: "https://picsum.photos/200?2",
      },
      {
        id: 3,
        name: "T-Shirt",
        price: 800,
        category: "Clothing",
        image: "https://picsum.photos/200?3",
      },
      {
        id: 4,
        name: "Jeans",
        price: 1800,
        category: "Clothing",
        image: "https://picsum.photos/200?4",
      },
      {
        id: 5,
        name: "Book",
        price: 450,
        category: "Books",
        image: "https://picsum.photos/200?5",
      },
    ];




  return (
    <>
        <h1>All Products</h1>  

        <ProductList
            productsItem={products}
            category="All"
        />

        <hr />

        <h2>Electornics</h2>
         <ProductList
            productsItem={products}
            category="Electronics"
        />

      <hr />

        <h2>Cloths</h2>
         <ProductList
            productsItem={products}
            category="Clothing"
        />

         <hr />

        <h2>Books</h2>
         <ProductList
            productsItem={products}
            category="Books"
        />

    </>
  )
}

export default App
