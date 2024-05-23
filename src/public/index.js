const state = {}

const Api = {
  signup: async data => {
    const res = await fetch(`/api/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const resBody = await res.json()
    console.log('signup, response:', resBody)

    state.user = resBody.data
  },

  signin: async data => {
    const res = await fetch(`/api/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const resBody = await res.json()
    console.log('signin, response:', resBody)

    state.user = resBody.data
  },

  getUser: async () => {
    if (!state.user)
      throw new Error(
        'user data is not present, you need to sign in or sign up first to get the user id'
      )

    const res = await fetch(`/api/users/${state.user.id}`)

    const resBody = await res.json()
    console.log('get user, response:', resBody)
  },

  createPost: async data => {
    const res = await fetch(`/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    const resBody = await res.json()
    console.log('create post, response:', resBody)
  },

  getPosts: async () => {
    const res = await fetch('/api/posts')

    const resBody = await res.json()
    console.log('getPosts, response:', resBody)
  },
}

const initSignup = () => {
  const form = document.querySelector('form#signup')

  form.addEventListener('submit', ev => {
    ev.preventDefault()

    const formData = new FormData(ev.target)
    console.log('initSignup, formData:', formData)

    const formObject = {}

    for (const [k, v] of formData.entries()) {
      formObject[k] = v
    }

    Api.signup(formObject)
  })
}

const initSignin = () => {
  const form = document.querySelector('form#signin')

  form.addEventListener('submit', ev => {
    ev.preventDefault()

    const formData = new FormData(ev.target)
    console.log('initSignin, formData:', formData)

    const formObject = {}

    for (const [k, v] of formData.entries()) {
      formObject[k] = v
    }

    Api.signin(formObject)
  })
}

const initCreatePost = () => {
  const form = document.querySelector('form#post')

  form.addEventListener('submit', ev => {
    ev.preventDefault()

    const formData = new FormData(ev.target)
    console.log('initCreatePost, formData:', formData)

    const formObject = {}

    for (const [k, v] of formData.entries()) {
      formObject[k] = v
    }

    Api.createPost(formObject)
  })
}

const initGetPosts = () => {
  const button = document.querySelector('button#get-posts')
  button.addEventListener('click', () => {
    Api.getPosts()
  })
}

const initGetUser = () => {
  const button = document.querySelector('button#get-user')
  button.addEventListener('click', () => {
    Api.getUser()
  })
}

const main = () => {
  console.log('Hello, pecode')

  initSignup()
  initSignin()
  initCreatePost()
  initGetPosts()
  initGetUser()
}

document.addEventListener('DOMContentLoaded', main)
