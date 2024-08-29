import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./ProductDetail.css";
import { useNavigate } from "react-router-dom";


function ProductDetail() {
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
        console.log(product);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  function Table1() {
    const handleCompare = (product) => {
        if (!selectedProducts.find(p => p.id === product.id)) {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const goToComparePage = () => {
        navigate("/product-compare", { state: { selectedProducts } });
    };
    const columns = [
      {
        title: "Image",
        dataIndex: "thumbnail",
        key: "thumbnail",
        render: (text, record) => (
          <img
            src={record.thumbnail}
            alt={record.brand}
            style={{ width: "50px", height: "50px" }}
          />
        ),
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        sorter: (a, b) => a.title.localeCompare(b.title),
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.title === record.title) ? "highlight" : ""}>
                ${text}
            </span>
        ),
        
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: (a, b) => a.description.localeCompare(b.description),
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.description === record.description) ? "highlight" : ""}>
                ${text}
            </span>
        ),
      },
      {
        title: "Brand",
        dataIndex: "brand",
        key: "brand",
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.brand === record.brand) ? "highlight" : ""}>
                {text}
            </span>
        ),
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        sorter: (a, b) => a.category.localeCompare(b.category),
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.category === record.category && p.id === record.id) ? "highlight" : ""}>
                {text}
            </span>
        ),
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        sorter: (a, b) => a.price - b.price,
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.price === record.price) ? "highlight" : ""}>
                ${text}
            </span>
        ),
      },
      {
        title: "Discount",
        dataIndex: "discountPercentage",
        key: "discountPercentage",
        sorter: (a, b) => a.discountPercentage - b.discountPercentage,
        render: (text, record) => (
            <span className={selectedProducts.find(p => p.discountPercentage === record.discountPercentage) ? "highlight" : ""}>
                {text}%
            </span>
        ),      },
      {
        title: "Action",
        render: (record) => {
          return <button className={selectedProducts .length == 4 ? "disable" : ""}  onClick={() => handleCompare(record)}>Compare</button>;
        },
      },
    ];
    return (
        <div className="table">
          {selectedProducts.length > 0 && (
                 <div>
                     <button onClick={goToComparePage}>Go to Compare Page ({selectedProducts.length} products)</button>
                 </div>
             )}
        <Table
          dataSource={product}
          columns={columns}
          rowKey="id"
          pagination={{
            pageSize: 10,
          }}
        
        />
      </div>
    );
  }
  return (
    <div>
      <Table1 />
    </div>
  );
}

export default ProductDetail;
