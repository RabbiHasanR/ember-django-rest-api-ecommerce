import Route from '@ember/routing/route';
import { products } from '../data/products';

export default Route.extend({
    model() {
        return products;
    },
});
