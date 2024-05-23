console.log('Hello, pecode')

async function signup() {
  const res = await fetch(`/api/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'username00',
      email: 'email00',
      password: 'password00',
    }),
  })

  const resBody = await res.json()
  console.log('signup, response:', resBody)
}

async function signin() {
  const res = await fetch(`/api/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'email00',
      password: 'password00',
    }),
  })

  const resBody = await res.json()
  console.log('signin, response:', resBody)
}

async function createPost() {
  const res = await fetch(`/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: 'Lorem ipsum dolor amet',
    }),
  })

  const resBody = await res.json()
  console.log('create post, response:', resBody)
}

async function getPosts() {
  const res = await fetch('/api/posts')

  const resBody = await res.json()
  console.log('getPosts, response:', resBody)
}
