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
