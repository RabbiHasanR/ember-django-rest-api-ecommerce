import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    cart: service('shopping-cart'),

    get subtotal() {
        return this.cart.items.reduce((acc, item) => {
            return acc + item.price * item.count;
        }, 0);
    },
    get tax() {
        return 0.09 * this.subtotal;
    },
    get total() {
        return this.subtotal + this.tax;
    },

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
