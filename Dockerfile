FROM node:25-alpine3.22

WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package.json ./
COPY package-lock.json ./

# Instalar dependencias
RUN npm install

#Copiar el resto del proyecto
COPY . . 


#Exponer el puerto
EXPOSE 4000

# Generar instancia de prisma
CMD ["sh", "-c", "npx prisma generate && npm run start:dev"]