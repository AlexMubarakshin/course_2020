import { Item } from '../model/Item';
import { observable, action, computed } from 'mobx';

const defaultValues: Item[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    image:
      'https://images.unsplash.com/photo-1532035205886-fa50cc934265?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    image:
      'https://images.unsplash.com/photo-1592373636179-38e6377d756a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 3',
    image:
      'https://images.unsplash.com/photo-1512138664757-360e0aad5132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60',
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Description 4',
    image:
      'https://images.unsplash.com/photo-1592838948611-69071139f9e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
];

class FavoriteStore {
  @observable items = defaultValues;

  @observable searchedItemTitle = '';

  @computed get filtredItems(): Item[] {
    if (!this.searchedItemTitle) {
      return this.items;
    }

    return this.items.filter((i) => i.title === this.searchedItemTitle);
  }

  @action add(item: Item): void {
    this.items.push(item);
  }

  @action update(updatedItem: Item): void {
    this.items = this.items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
  }

  @action delete(deletedItem: Item): void {
    this.items = this.items.filter((item) => item.id !== deletedItem.id);
  }

  @action setSearchQuery(title: string): void {
    this.searchedItemTitle = title;
  }
}

export default FavoriteStore;
