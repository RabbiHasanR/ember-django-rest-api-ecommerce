import Component from '@ember/component';

export default Component.extend({
    choosePreviewImage: Ember.observer('file', function(){
        var file = document.getElementById('file-field').files[0];
        if (file) {
          var reader = new FileReader();
      
          reader.onload = function (e) {
            $('#preview-image').attr('src', e.target.result);
          }
      
          reader.readAsDataURL(file);
          this.set('tutorial.temporaryThumbnailImage', file);
        }
      }),
    previewImage(file) {
          var reader = new FileReader();
      
          reader.onload = function (e) {
            $('#preview-image').attr('src', e.target.result);
          }
      
          reader.readAsDataURL(file);
      },
      actions: {
        receiveFile(file) {
            this.previewImage(file);
            this.set('tutorial.temporaryThumbnailImage', file);
        },
        selectDifficulty(value) {
          console.log(value);
          this.set('tutorial.difficulty', value);
        },
        publishDateSelectedValue(value) {
          console.log(value);
          this.set('tutorial.publishDate', value);
        }
      }
});
