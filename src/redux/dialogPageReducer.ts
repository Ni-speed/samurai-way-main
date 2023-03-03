import {dialogPageType, massegesDataType} from "./state";
import {addPostACType, updateNewPostTextACType} from "./profilePageReducer";


type addMessageACType = ReturnType<typeof addMessageAC>
type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export type ActionType =  updateNewMessageTextACType | addMessageACType | updateNewPostTextACType | addPostACType

export const dialogPageReducer = (state: dialogPageType, action: ActionType): dialogPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage: massegesDataType = {
                id: 4,
                massage: state.newMassageText
            }
            state.massegesData.push(newMessage)
            state.newMassageText = ''
            return state
        }
        case 'UPDATE-NEW-MESSAGE': {
            state.newMassageText = action.body
            return state
        }
        default:
            return state
    }

}


export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateNewMessageTextAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        body: body
    } as const
}
