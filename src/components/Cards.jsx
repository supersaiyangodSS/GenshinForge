import { useState, useEffect } from "react";
import axios from 'axios';

const Card = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get('https://flameforge.glitch.me/api/character');
                const data = response.data;
                setData(data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    
    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        console.log(error)
        return <div>Error</div>
    }

    return(
        <div>
            <h2>Data from API</h2>
            <p>{JSON.stringify(data, null, 2)}</p>
        </div>
    )
}

export default Card;