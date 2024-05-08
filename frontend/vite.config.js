import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //el proxy solo se ejecuta en desarrollo
    //en produccion, la url es una misma, por ejemplo
    //gasteac.com, y ahi mismo esta la api en gasteac.com/api
    //por eso ya no hace falta redirigir con un proxy
    //en desarrollo, la api esta en localhost:4000 y el front en no se :5173 o algo asi
    //por eso hay que redirigir con un proxy
    // en cambio en produccion la api esta en gasteac.com/api
    //y el front en gasteac.com, y realiza peticiones a gasteac.com/apu que ya esta ahi con él
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.PORT}/`,
        secure: false,
      },
    },
  },
})
