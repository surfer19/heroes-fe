import { createSelector } from "reselect";
import { selectItems } from "../GnomeDetail/selectors"

export const selectProfessionsFromItems = createSelector(
    [selectItems],
    (items) => items.map(item => item.professions)
)

export const selectUniqueProfessions = createSelector(
    [selectProfessionsFromItems],
    (twoDimensionProfessions) => {
        const result = [];
        const map = new Map();
        for (const professions of twoDimensionProfessions) {
            for (const profession of professions) {
                if(!map.has(profession)){
                    map.set(profession, true);    // set any value to Map
                    result.push(profession);
                }
            }
        }
        return result
    }
)

const selectProfessionName = (state, profName) => profName; 
const selectPropsItems = (props) => props.allGnomes

export const selectGnomesByProfession = createSelector(
    [selectPropsItems, selectProfessionName],
    (items, profName) => items.filter(item => item.professions.includes(profName))
)