// const express = require('express') - se le conoce como los modulos commonJS de node

// en este caso para utilizar codigo moderno vamos a utilizar los esm modules o ecmascript modules
import express  from 'express'
import cors from 'cors';
import busRoutes from './routes/bus.routes.js'
import avionRoutes from './routes/avion.routes.js'

const app = express();
//settings
app.set('port', 3000);

app.use(express.json());
// console.log()

app.use(cors());

app.use(avionRoutes);
app.use(busRoutes);

app.use((req, res, next) => {
   res.status(404).json({
      message: 'endpoint no found'
   })
})

app.listen(app.get('port'), () => {
   console.log('Listenig on port', app.get('port'))
});