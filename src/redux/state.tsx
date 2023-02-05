import {renderEntireTree} from "../render";

type postsData = {
    id: number
    titlePost: string
    titleLike: number
}
export let state = {
        postsData:[
            {id: 1, titlePost: 'Hi it\'s my first post', titleLike: 25},
            {id: 2, titlePost: 'two it\'s my', titleLike: 15},
            {id: 3, titlePost: 'three four 5', titleLike: 45},
        ],
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
        bestFriendsMasseges: [
            {id: 1, massage: 'Hi!'},
            {id: 2, massage: 'test'},
            {id: 3, massage: 'test'}
        ]
}

export  const addPost = (myNewPost:string) => {
    let newPost: postsData = {
        id: 4,
        titlePost: myNewPost,
        titleLike: 0
    }
    state.postsData.push(newPost)
    renderEntireTree(state)
}