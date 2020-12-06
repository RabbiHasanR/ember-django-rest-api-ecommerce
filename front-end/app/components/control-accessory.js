import Component from '@ember/component';

export default Component.extend({
    // hasItem: false,
    // itemColor: "blue",
    // colors: ["blue", "red", "green", "purple", "orange"],
    actions: {
      // putOnItem(color){
      //   this.set('itemColor', color)
      //   this.set('hasItem', true)
      //   this.pressRelease();
      // },
      // takeOffItem(){
      //   this.set('hasItem', false)
      //   // this.takeOffHat();
      // },
      changeItem(color) {
        // this.set('hasItem', true);
        const hasMatch = this.changeItem(color);
        return hasMatch;
      },
      // howToRemoveItem(){
      //   this.showModalDialog('we realize it is difficult to remove our proprietary vicelok Items');
      // }
    }
});
