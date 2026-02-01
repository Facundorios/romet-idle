FROM node:25-alpine3.22

WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package.json ./
COPY package-lock.json ./

# Instalar dependencias
RUN npm install

#Copiar el resto del proyecto
COPY . . 

# Generar cliente de Prisma
# RUN npx prisma generate

#Exponer el puerto
EXPOSE 3000