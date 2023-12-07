import SQLite from 'react-native-sqlite-storage';
import { electrify } from 'electric-sql/react-native'
import { schema, Accounts } from '../src/generated/client/index.ts'

// Enable the promise API. Note that we use the
// `promisesEnabled` flag again below to tell the
// driver adapter that we're using the promise API.
const promisesEnabled = true
SQLite.enablePromise(promisesEnabled)

// TODO : don't hardcode auth
let config = {
  url: "ws://localhost:5133",
  auth: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzM0NzYzNTAsImlhdCI6MTcwMTk0MDM0OSwibmJmIjoxNzAxOTQwMzQ5LCJzdWIiOiJmYTRlMjYzNC01NzRlLTQyOGUtOTYzNS1kNWY4MmQ2MDZjZjkifQ.JhJMPSyqllBQPQQKQiDkj2Rq8eNvFmKHBKFHKoIGGQw"
  }
}

export type Account = Accounts;

export const connect = async (authToken: String) => {
  // Create the react-native-sqlite-storage database
  // connection. The first argument is your database
  // name. Changing this will create/use a new local
  // database file.
  const conn = await SQLite.openDatabase('electric.db')
  return electrify(conn, schema, promisesEnabled, config)
}

export const listAccounts = async (electric) => {
  return electric.db.accounts.findMany();
}


