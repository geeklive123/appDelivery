const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app) => {

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS

    
  
    app.post('/api/orders/create',  passport.authenticate('jwt', { session: false }), OrdersController.create);

}