import { addPerson, removePerson } from '../effects/PersonEffect'

export type Actions =
    | ReturnType<typeof addPerson>
    | ReturnType<typeof removePerson>
