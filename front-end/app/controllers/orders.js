import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    cart: service('shopping-cart'),
    // store: service(),

    actions: {
        createOrder(newOrder) {
            console.log(typeof(this.cart.items));
            newOrder.set('totalPrice', this.cart.total);
            newOrder.set('items', this.cart.items);
            console.log('Order:',newOrder);
            newOrder.save().then(response => {
                this.set("orderResponse", true);
                this.set("model.name", "");
                this.set("model.email", "");
                this.set("model.address", "");
                this.cart.empty();

            }).catch(response => console.log('Order post error:',response));
        }
    }
});
