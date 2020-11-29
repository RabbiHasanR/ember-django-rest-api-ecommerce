import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import { computed } from '@ember/object';

export default Controller.extend({
    cart: service('shopping-cart'),

    // subtotal: computed('cart.items.@each.count', function() {
    //     return this.cart.items.reduce((acc, item) => {
    //         return acc + item.price * item.count;
    //     }, 0);
    // }),

    // tax: computed('cart.items.@each.count', function() {
    //     return 0.09 * this.subtotal;
    // }),

    // total: computed('cart.items.@each.count', function() {
    //     return this.subtotal + this.tax;
    // }),
    

    actions: {
        updateItemCount(item, event) {
            const count = event.target.value;
            console.log(count);
            if (count >= 0) {
                event.target.value = count;
            } else {
                event.target.value = 0;
            }
            console.log(event.target.value)
            this.cart.changeItemCount(item, parseInt(event.target.value))
        },

        removeItem(item) {
            this.cart.remove(item);
        }
    }
});
