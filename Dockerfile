# مرحله اول: build برنامه
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

 # مرحله دوم: اجرای نسخه build‌شده با Nginx
FROM nginx:alpine
COPY --from=build /app/dist  /usr/share/nginx/html

 # کپی فایل تنظیمات Nginx اختیاریه
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]