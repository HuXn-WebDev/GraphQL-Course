### inside the index.js file

```js
const typeDefs = `#graphql
  type Movie {
    id: ID
    title: String
    releaseYear: Int
  }

  type Post {
    id: ID
    title: String
    body: String
    published: Boolean
  }

  type User {
    id: ID
    name: String
    email: String
    age: Int
  }

  type Query {
    movies: [Movie]
    posts: [Post]
    users: [User]
  }
`;

const resolvers = {
  Query: {
    movies: () => [
      { id: "1", title: "Inception", releaseYear: 2010 },
      { id: "2", title: "Interstellar", releaseYear: 2014 },
      { id: "3", title: "The Dark Knight", releaseYear: 2008 },
    ],

    posts: () => [
      { id: "1", title: "Post 1", body: "Body of post 1", published: true },
      { id: "2", title: "Post 2", body: "Body of post 2", published: true },
      { id: "3", title: "Post 3", body: "Body of post 3", published: false },
    ],

    users: () => [
      { id: "1", name: "John Doe", email: "jZ6Wv@example.com", age: 30 },
      { id: "2", name: "Jane Doe", email: "jZ6Wv@example.com", age: 25 },
      { id: "3", name: "Bob Smith", email: "jZ6Wv@example.com", age: 40 },
    ],
  },
};
```

```graphql
{
  movies {
    id
    title
    releaseYear
  }

  posts {
    id
    title
    body
    published
  }

  users {
    id
    name
    age
    email
  }
}
```
