import { writable } from 'svelte/store';

const cart = writable([
  {
    id: 'p3',
    title: 'Test',
    price: 9.99
  },
  {
    id: 'p4',
    title: 'Test',
    price: 9.99
  }
]);

const customCart = {
  subscribe: cart.subscribe,

  addItem: item => {
    cart.update(items => {
      return [...items, item];
    });
  },

  removeItem: id => {
    cart.update(items => items.filter(item => item.id !== id));
  }
};

export default customCart;
