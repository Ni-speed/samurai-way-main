import {profilePageReducer} from "./profilePageReducer";
import {ActionType, dialogPageReducer} from "./dialogPageReducer";

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    renderEntireTree: (state: RootStateType) => void
    // addPost: () => void
    // addMessage: () => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText: (body: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionType) => void  // неверная типизация
}
export type RootStateType = {
    profilePage: profilePageType
    dialogPage: dialogPageType
}


export type AppPropsType = {
    state: RootStateType
    // addPost: (myNewPost: string) => void
    // updateNewPostText: (newText: string) => void
}

export type profilePageType = {
    postsData: postsDataType[]
    newPostText: string
}
// export type postsData = {
//     id: number
//     titlePost: string
//     titleLike: number
// }
export type postsDataType = {
    id: number
    titlePost: string
    titleLike: number
}
export type dialogPageType = {
    dialogsData: dialogsDataType[]
    massegesData: massegesDataType[]
    newMassageText: string
}
export type dialogsDataType = {
    id: number
    name: string
}
export type massegesDataType = {
    id: number
    massage: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, titlePost: 'Hi it\'s my first post', titleLike: 25},
                {id: 2, titlePost: 'two it\'s my', titleLike: 15},
                {id: 3, titlePost: 'three four 5', titleLike: 45},
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogsData: [
                {id: 1, name: 'Ilmir'},
                {id: 2, name: 'Kamila'},
                {id: 3, name: 'Aliya'},
                {id: 4, name: 'Insia'},
                {id: 5, name: 'Almaz'}
            ],
            massegesData: [
                {id: 1, massage: 'Hi!'},
                {id: 2, massage: 'How ara you?'},
                {id: 3, massage: 'I\'am fine'}
            ],
            newMassageText: ''
        },
    },
    getState() {
        return this._state
    },
    renderEntireTree(_state: RootStateType) {
    },
    subscribe(observer: (state: RootStateType) => void) {
        this.renderEntireTree = observer
    },
    // addPost() {
    //     let newPost: postsDataType = {
    //         id: 4,
    //         titlePost: this._state.profilePage.newPostText,
    //         titleLike: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this.updateNewPostText('')
    //     this.renderEntireTree(this._state)
    // },
    // addMessage() {
    //     let newMessage: massegesDataType = {
    //         id: 4,
    //         massage: this._state.dialogPage.newMassageText
    //     }
    //     this._state.dialogPage.massegesData.push(newMessage)
    //     this.updateNewMessageText('')
    //     this.renderEntireTree(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this.renderEntireTree(this._state)
    // },
    // updateNewMessageText(body: string) {
    //     this._state.dialogPage.newMassageText = body
    //     this.renderEntireTree(this._state)
    // },
    dispatch(action: ActionType) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action)
        this.renderEntireTree(this._state)

        // switch (action.type) {
        //     case 'ADD-POST' : {
        //         this.addPost()
        //         break
        //     }
        //     case 'UPDATE-ENTIRE-TREE': {
        //         this.updateNewPostText(action.newText)
        //         break
        //     }
        //     case 'ADD-MESSAGE': {
        //         this.addMessage()
        //         break
        //     }
        //     case 'UPDATE-NEW-MESSAGE': {
        //         this.updateNewMessageText(action.body)
        //         break
        //     }
        // }
    }
}

// export const addPostAC = () => {
//     return {
//         type: 'ADD-POST'
//     } as const
// }
//
// export const updateNewPostTextAC = (text: string) => {
//     return {
//         type: 'UPDATE-ENTIRE-TREE',
//         newText: text
//     } as const
// }
// export const addMessageAC = () => {
//     return {
//         type: 'ADD-MESSAGE'
//     } as const
// }
// export const updateNewMessageTextAC = (body: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE',
//         body: body
//     } as const
// }
