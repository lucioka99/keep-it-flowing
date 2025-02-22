// backend/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

const app = express();
const port = 3001;

// Configurar MercadoPago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN, // Usa tu Access Token de producción
});
const preference = new Preference(client);

// Configurar CORS para permitir solicitudes desde localhost:5173 y Vercel
const corsOptions = {
  origin: [process.env.REACT_APP_FRONTEND_URL, process.env.NEXT_PUBLIC_SITE_URL], // Usar las variables de entorno
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// Middlewares
app.use(cors(corsOptions));  // Usar la configuración de CORS
app.use(express.json());

// Ruta para crear una preferencia
app.post("/create-preference", async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // Validar los datos que llegan

    const { title, quantity, price } = req.body;

    if (!title || !quantity || !price) {
      return res.status(400).json({ error: "Faltan datos requeridos" });
    }

    const preferenceData = {
      items: [
        {
          title,
          quantity: parseInt(quantity),
          currency_id: "ARS",
          unit_price: parseFloat(price),
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_SITE_URL}/success`, // Usar la URL de producción
        failure: `${process.env.NEXT_PUBLIC_SITE_URL}/failure`, // Usar la URL de producción
        pending: `${process.env.NEXT_PUBLIC_SITE_URL}/pending`, // Usar la URL de producción
      },
      auto_return: "approved",
    };
    
    const response = await preference.create({ body: preferenceData });
    res.json({ id: response.id });
  } catch (error) {
    console.error("Error al crear la preferencia:", error.response ? error.response.data : error);
    res.status(500).json({ error: "Error al procesar el pago" });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
