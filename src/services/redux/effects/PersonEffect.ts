/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const addPerson = (personName: string) => {
    return {
        type: 'AddPerson',
        payload: personName,
    } as const
}

export const removePerson = (id: number) => {
    return {
        type: 'RemovePerson',
        payload: id,
    } as const
}
