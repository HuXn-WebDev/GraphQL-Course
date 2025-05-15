1. npm init -y
2. npm i nodemon graphql @apollo/server
3. Go to package.json and paste the following:

```json
{
  "type": "module",

  "scripts": {
    "dev": "nodemon index.js"
  }
}
```
