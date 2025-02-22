import React from "react";
import CheckoutMercadoPago from "../components/CheckoutMercadoPago";

const productos = [
  { id: 1, nombre: "Remera Keep It Flowing", precio: 15000, imagen: "/images/remera.jpeg" },
  { id: 2, nombre: "Gorra Keep It Flowing", precio: 5000, imagen: "/images/gorra.jpeg" },
  { id: 3, nombre: "Cenicero Keep It Flowing", precio: 3000, imagen: "/images/cenicero.jpeg" },
  { id: 4, nombre: "Llavero Keep It Flowing", precio: 2000, imagen: "/images/llavero.jpeg" },
];

const Tienda = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#1a1a2e", color: "white", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "24px", textAlign: "center", color: "#a855f7" }}>
        Tienda
      </h1>
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "center", 
          gap: "24px", 
          overflowX: "auto", 
          whiteSpace: "nowrap", 
          padding: "16px"
        }}
      >
        {productos.map((producto) => (
          <div 
            key={producto.id} 
            style={{ 
              backgroundColor: "#222", 
              border: "1px solid #444", 
              padding: "16px", 
              borderRadius: "8px", 
              textAlign: "center", 
              width: "390px", 
              flexShrink: 0 
            }}
          >
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px", marginBottom: "12px" }} 
            />
            <h2 style={{ fontSize: "20px", fontWeight: "600" }}>{producto.nombre}</h2>
            <p style={{ color: "#aaa" }}>${producto.precio}</p>

            {/* Pasamos los detalles del producto */}
            <CheckoutMercadoPago 
              title={producto.nombre} 
              price={producto.precio} 
              quantity={1} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tienda;
