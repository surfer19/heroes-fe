import { createSelector } from 'reselect'

const selectItems = state => state.allGnomes;
const selectItemId = (state, itemId) => itemId;  
  
export const selectItemById = createSelector(  
    [selectItems, selectItemId],
    (items, itemId) => items[itemId]
);