import React, { ReactNode, useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-storage';
import { electrify } from 'electric-sql/react-native'
import { makeElectricContext } from 'electric-sql/react'
import { Electric, schema } from '../src/generated/client'
import { connect } from "./db-service";
import App from "../App"

export const { ElectricProvider, useElectric } = makeElectricContext<Electric>()


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

export const ElectricWrapper = () => {
    const [electric, setElectric] = useState<Electric>()

    useEffect(() => {
        let isMounted = true

        const init = async () => {
            console.log("init!")
            const conn = await SQLite.openDatabase('electric.db')
            console.log("connected")
            const electric = await electrify(conn, schema, promisesEnabled, config)
            console.log("electrified")

            if (!isMounted) {
                console.log("early exit")
                return
            }

            console.log("setting electric")

            setElectric(electric)
        }

        init()

        return () => {
            isMounted = false
        }
    }, [])

    if (electric === undefined) {
        return null
    }

    return (
        <ElectricProvider db={electric}>
            <App />
        </ElectricProvider>
    )
}
