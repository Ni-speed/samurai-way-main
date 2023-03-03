import {postsDataType, profilePageType} from "./state";
import {ActionType} from "./dialogPageReducer";


export type addPostACType = ReturnType<typeof addPostAC>
export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
// export type ActionProfileType = addPostACType | updateNewPostTextACType

export const profilePageReducer = (state: profilePageType, action: ActionType): profilePageType => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newPost: postsDataType = {
                id: 4,
                titlePost: state.newPostText,
                titleLike: 0
            }
            state.postsData.push(newPost)
            state.newPostText=''
            break
        }
        case 'UPDATE-ENTIRE-TREE':
            state.newPostText = action.newText
        }
         return state
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-ENTIRE-TREE',
        newText: text
    } as const
}