import Controller from '@ember/controller';

export default Controller.extend({
    // hatColor: 'none',
    // necklaceColor: 'blue',
    // shoeColor: 'orange',

    // items: ['hat', 'necklace', 'shoe', 'scarves'],
    items: Ember.computed.alias('global.accessoryTypes'),
    itemsDetails: Ember.computed(function() {
        return this.items.map(itemName => {
            return {
                itemName: itemName,
                itemColor: 'none'
            }
        })
    }),
    matchAnotherItem(itemIndex) {
        const color = this.itemsDetails[itemIndex].itemColor;
        return this.itemsDetails.any((item,index) => {
            return Ember.get(item, 'itemColor') === color && index !== itemIndex;
        });

    },
    actions: {
        closeModalDialog(){
            this.set('isShowingModal', false)
        },
          showModalDialog(message){
            this.set('modalMessage', message)
            this.set('isShowingModal', true)
        },
        pressRelease() {
            alert('Click press realese');
        },
        // putOnHat(color) {
        //     alert('put on hat color:', color);
        // },
        // takeOffHat() {
        //     alert('take off hat!');
        // },
        removeHat() {
            this.send('showModalDialog', 'how to remove hat?');
        },
        // changeItem(itemName, color) {
        //     this.set(itemName, color)
        // }
        changeItem(itemIndex, newColor) {
            this.set(`itemsDetails.${itemIndex}.itemColor`, newColor);
            return this.matchAnotherItem(itemIndex);
        }
    }
});
