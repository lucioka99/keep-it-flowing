import { useEffect } from "react";

function CheckoutMercadoPago({ title, price, quantity = 1 }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = initializeMercadoPago;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeMercadoPago = () => {
    const mp = new window.MercadoPago("APP_USR-f9b15342-c72e-44d6-8c5f-c65d02da47b6", {
      locale: "es-AR",
    });

    const checkoutButton = document.getElementById(`checkout-button-${title}`);

    checkoutButton.addEventListener("click", async () => {
      try {
        const response = await fetch(
          "https://keep-it-flowing.vercel.app/create-preference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              quantity,
              price,
            }),
          }
        );

        const { id } = await response.json();

        mp.checkout({
          preference: {
            id,
          },
          autoOpen: true, // Abre el checkout automáticamente
        });
      } catch (error) {
        console.error("Error al iniciar el pago:", error);
      }
    });
  };

  return (
    <button id={`checkout-button-${title}`} style={{ 
      marginTop: "12px", 
      backgroundColor: "#a855f7", 
      color: "white", 
      padding: "10px 16px", 
      borderRadius: "6px", 
      border: "none", 
      cursor: "pointer" 
    }}>
      Comprar con MercadoPago
    </button>
  );
}

export default CheckoutMercadoPago;
