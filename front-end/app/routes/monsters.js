import Route from '@ember/routing/route';
import Authenticated from '../mixins/authenticated-route';

export default Route.extend(Authenticated,{
    model(){
        return this.store.findAll('monster');
    }
});
