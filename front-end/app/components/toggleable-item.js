import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'span',
    isToggled: computed('toggleableItem.property', 'toggledList.@each', function() {
        return this.toggledList.includes(this.toggleableItem.property);
    }),
    actions: {
        toggleItem() {
            if(this.isToggled) {
                this.toggledList.removeObject(this.toggleableItem.property);
            } else {
                this.toggledList.pushObject(this.toggleableItem.property);
            }
        }
    }
});
