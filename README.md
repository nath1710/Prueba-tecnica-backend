# 📦 Variables de entorno - Proyecto Node.js + Express

## 🧠 Descripción del proyecto

Este proyecto es una **API REST desarrollada con Node.js y Express** que consume una API externa financiera (FastForex).

La API se conecta a un servicio externo de tasas de cambio, obtiene los datos en tiempo real y los **transforma antes de responder al cliente**.

### ⚙️ ¿Qué hace exactamente?

- Consume una API externa de tipo financiero
- Obtiene tasas de cambio de múltiples monedas
- Toma como base el valor del **USD**
- Procesa y transforma los datos recibidos
- Clasifica las monedas en:
  - 🟢 Las más fuertes (menor tasa frente al USD)
  - 🔴 Las más débiles (mayor tasa frente al USD)
- Devuelve una respuesta estructurada en formato JSON

---

## 🌐 API externa utilizada

### 🔗 Página oficial

https://www.fastforex.io/

### 📚 Documentación oficial

https://www.fastforex.io/docs/api-reference/currency

---

## 🧾 Registro y API Key

Para utilizar esta API es necesario:

1. Crear una cuenta en FastForex  
2. Registrarse en la plataforma  
3. Generar una API Key personal  
4. Usar esa API Key en las peticiones HTTP  

📌 La API Key se obtiene desde el panel de usuario después del registro.

---

## 🚀 Variables de entorno utilizadas

### 🔴 API_KEY (OBLIGATORIA)

Clave necesaria para autenticar las solicitudes a la API externa.

```env id="m8k3qp"
API_KEY=tu_api_key_de_fastforex
```
---
## ⚙️ Instalación y ejecución del proyecto
 
### 1. Clonar el repositorio
 
```bash
git clone https://github.com/nath1710/Prueba-tecnica-backend.git
```
 
### 2. Instalar dependencias
 
```bash
npm install
```
 
📌 Dependencias utilizadas:
 
- express
- axios
- dotenv
### 3. Configurar variables de entorno
 
Crear un archivo `.env` en la raíz del proyecto:
 
```env
API_KEY=tu_api_key_de_fastforex
```
 
### 4. Ejecutar el proyecto
 
```bash
npm start
```
