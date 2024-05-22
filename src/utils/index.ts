import crypto from 'crypto'

export function generateHash(password: string) {
  const hash = crypto.pbkdf2Sync(password, process.env.SALT as string, 10000, 512, 'sha512')

  return hash.toString()
}

export function isEqualHash(hash: string, password: string) {
  const _hash = crypto
    .pbkdf2Sync(password, process.env.SALT as string, 10000, 512, 'sha512')
    .toString()

  return hash === _hash
}
