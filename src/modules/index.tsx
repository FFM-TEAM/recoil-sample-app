import { atom, selector } from 'recoil';

import { User } from './data';

const coreState = atom({
  key: 'coreState',
  default: {
    layer: false,
    popup: false,
  },
});

const userState = atom<User[] | null>({
  key: 'userState',
  default: null,
});

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const text = await get(userState);
    setTimeout(() => {
      console.log('aa');
    }, 3000);

    return text;
  },
});

export const coreListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const list = get(coreState);
    console.log(list);
  },
});

export { userState, coreState, charCountState };
