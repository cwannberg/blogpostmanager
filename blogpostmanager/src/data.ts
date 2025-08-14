import type { IBlogPost } from './types'

export const DummyPosts: IBlogPost[] = [ 
    {
        title: 'Hej',
        content: "Det här är mitt första blogginlägg",
        author: 'Cilla',
        timeStamp: Date.now()
    },
        {
        title: 'Hej igen',
        content: "Det här är mitt andra blogginlägg",
        author: 'Cilla',
        timeStamp: Date.now()
    },
        {
        title: 'Hej igen, igen',
        content: "Det här är mitt tredje blogginlägg",
        author: 'Cilla',
        timeStamp: Date.now()
    }
];