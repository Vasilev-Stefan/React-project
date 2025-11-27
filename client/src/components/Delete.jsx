import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"

export function Delete() {
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const isConfirmed = confirm('Are you sure you want to delete this game?')
    
        if(isConfirmed){
            fetch(`http://localhost:3030/jsonstore/games/${id}`, {
                method: 'DELETE',
            }).then(response => response.json())
            .catch(error => alert(error.message))
    
            navigate('/')
        } else {
            navigate(`/games/details/${id}`)
        }

    }, [id, navigate])
}