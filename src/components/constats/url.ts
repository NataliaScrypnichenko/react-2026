const baseUrlJson = 'https://jsonplaceholder.typicode.com'

const baseUrlDemmy = 'https://dummyjson.com'

export const urlJson={
    users:{
        allUsers:baseUrlJson+'/'+'users',
    },
    posts:{
        allPosts:baseUrlJson+'/'+'posts',
    },
    comments:{
        allComments:baseUrlJson+'/'+'comments',
    }
};

export const urlDummy={
    users:{
        allUsers:baseUrlDemmy+'/'+'users',
    },
    posts:{
        allPosts:baseUrlDemmy+'/'+'posts',
    },
    comments:{
        allComments:baseUrlDemmy+'/'+'comments',
    }
};
