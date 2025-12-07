import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useUser } from "../hooks/useUser"

export function Delete() {
    const { user } = useUser()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const isConfirmed = confirm('Are you sure you want to delete this game?')
    
        if(isConfirmed){
            fetch(`http://localhost:3030/data/games/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': user?.accessToken
                }
            }).then(response => response.json())
            .catch(error => alert(error.message))
    
            navigate('/')
        } else {
            navigate(`/games/details/${id}`)
        }

    }, [id, navigate, user])
}