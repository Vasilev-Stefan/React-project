import { useState } from "react"

export function useFetch() {
    const [data, setData] = useState(null)
    // const {user} = useUser()

    const request = async (path, method = 'GET', bodyData = null) => {
        const options = {
            method,
            headers: {}
        }

        if(bodyData) {
            options.body = JSON.stringify(bodyData)
            options.headers['Content-Type'] = 'application/json'
        }

        // if(user) {
        //     options.headers = {
        //         ...options.headers,
        //         'X-Authorization': user.token
        //     }
        // }

        try {
            const response = await fetch(`http://localhost:3030/${path}`, options)

            if(!response.ok){
                throw new Error(`Error: ${response.status}`)
            }

            const result = await response.json()
            setData(result)
            return result
        } catch (error) {
            alert(error.message)
            throw error
        }
    }

    return {
        data,
        request
    }
}