import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        const items = [{price: 10}, {price: 15}];
        return items;
    }
});
