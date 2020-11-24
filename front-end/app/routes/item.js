import Route from '@ember/routing/route';
import { products } from '../data/products';

export default Route.extend({
    model(params) {
        const { item_id } = params;
        console.log('item route:',item_id)
        const product = products.find(({id}) => id === item_id);
        return product;
    },

    setupController(controller, model) {
        this._super(controller, model);
        // console.log('item route:',model);
        controller.set('model', model);
        controller.set('color', model.colors[0].color);
    },
});