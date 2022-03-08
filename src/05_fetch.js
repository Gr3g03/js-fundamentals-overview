/**
 * Yo, let's practice our API knowledge.
 */



// 1. This ^ is an endpoint that returns Nico's github repositories.
// Write a function called `getNamesOfNicosRepos`. It should:
//  - fetch data from the NicosRepositories endpoint.
//  - only keep the .name property of each repository.
//  - return all Nico's repo names as an array of strings.

const NicosRepositories = `https://api.github.com/users/minimumviableperson/repos`;


const repositories = function getNamesOfNicosRepos() {
    fetch('NicosRepositories')
        .then(resp => resp.json())
}
repositories.name

// 2. Create a JSON server. Add a /posts endpoint to it, which returns a list of posts.
// A post is: {
//   id: number,
//   title: string,
//   text: string
// }


const posts = [
    {
        'id': 1,
        'title': 'first post',
        'text': 'texttext'
    },
    {
        'id': 1,
        'title': 'first post',
        'text': 'texttext'
    },
    {
        'id': 1,
        'title': 'first post',
        'text': 'texttext'
    }
]


app.get('/posts', (req, res) => {
    res.send(posts)
})

// 2.1 Write a function called createPost that:
// - takes a post as an argument
// - save your post in the JSON server
// - console.log the newly created post from the response (it must contain the new post's id);
