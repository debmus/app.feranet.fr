# app.feranet.fr

## DEV

### app client
```
cd client
npm install
npm run serve
```

### app server
```
cd server
npm install
nodemon ./index.js
```

## BUILD + DOCKER
```
cd client
npm run build
```

- Import the content `dist/` to your prod directory `data/`
- Make docker-compose end up it

```docker
version: "3"
services:
  server:
    image: feranet/app-feranet
    container_name: server-appferanet
    networks:
      - backend
      - bridge
    ports:
      - "3000:3000"

  client:
    image: httpd:latest
    container_name: client-appferanet
    ports:
      - "8585:80"
    restart: always
    volumes:
      - ./data:/usr/local/apache2/htdocs/

```