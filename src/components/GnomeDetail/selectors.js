import { createSelector } from 'reselect'

export const selectItems = state => state.gnomeListReducer.allGnomes
const selectId = (state, itemId) => itemId; 

export const selectItemById = createSelector( 
  [selectItems, selectId],
   (items, id) => items[id]
)

const selectFriendNameByItem = createSelector(
  [selectItemById],
   (item) => item.friends
)

export const selectFriendsIdsById = createSelector(
  [selectItems, selectFriendNameByItem],
   (items, names) => {
        let nameIdPairs = {};
        // assign when we find match
        items.map(item => {
            names.map(name => {
                if (item.name === name) {
                    nameIdPairs[name] = item.id
                }
            })
        })
        return nameIdPairs
    }
)
