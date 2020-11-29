import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    cart: service('shopping-cart'),

    actions: {
        createOrder(newOrder) {
            console.log(this.cart.items);
            newOrder.set('totalPrice', this.cart.total);
            newOrder.set('items', this.cart.items);
            console.log('Order:',newOrder);
            alert('Order complete successfully');
        }
    }
});
