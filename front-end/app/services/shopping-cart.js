import Service from '@ember/service';
import { A } from '@ember/array';

class Item {
  count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}

export default Service.extend({
    items: null,

  init() {
    this._super(...arguments);
    this.set('items', A([]));
    this.set('existingItem', {});
  },

  add(item) {
    this.set('existingItem', this.items.find(({ name, color}) => {
      return name === item.name && color === item.color;
    }))

    if (this.get('existingItem')) {
      let count = this.get('existingItem').count;
      this.set('existingItem.count', count = count + 1);

    } else {
      this.items.pushObject(new Item({
        ...item,
        count: 1,
      }));
    }
  },

  changeItemCount(item, count) {
    this.set('existingItem', this.items.find(({ name, color}) => {
      return name === item.name && color === item.color;
    }))

    if (this.get('existingItem')) {
      this.set('existingItem.count', count);

    }

  },

  remove(item) {
    this.items.removeObject(item);
  },

  empty() {
    this.items.clear();
  },
});
