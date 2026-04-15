# 1. Usamos un sistema operativo Linux ligero con Node instalado
FROM node:18-alpine

# 2. Creamos nuestro directorio de trabajo en el contenedor
WORKDIR /app

# 3. Copiamos las dependencias e instalamos
COPY package.json ./
RUN npm install

# 4. Copiamos nuestro código fuente (index.js)
COPY . .

# 5. Exponemos el puerto
EXPOSE 3000

# 6. Comando para arrancar el microservicio
CMD ["npm", "start"]