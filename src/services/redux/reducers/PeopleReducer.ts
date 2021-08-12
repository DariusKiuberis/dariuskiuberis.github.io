/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Actions } from '../actions/PersonActions'

type Person = {
    id: number
    name: string
}

function neverReached(_never: never) {}

export const peopleReducer = (state: Person[] = [], action: Actions) => {
    switch (action.type) {
        case 'AddPerson':
            return state.concat({
                id: state.length + 1,
                name: action.payload,
            })
        case 'RemovePerson':
            return state.filter((person) => person.id !== action.payload)
        default:
            neverReached(action)
    }
    return state
}
