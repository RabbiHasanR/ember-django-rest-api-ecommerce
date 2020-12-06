import Component from '@ember/component';

export default Component.extend({
    colors: ["blue", "red", "green", "purple", "orange", 'none'],
    actions: {
      changeItem(color){
        const hasMatch=this.changeItem(color);
        if(hasMatch) {
          console.log('Color match');
        }
      }
    }
});
