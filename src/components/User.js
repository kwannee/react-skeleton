import React,{useState,useEffect} from 'react'
import SkeletonProfile from '../skeletons/SkeletonProfile';

function User() {
    const [profile, setProfile] = useState(null)
    const [img, setImg] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const data = await res.json()
            const img = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            const data2 = await img.json()
            setImg(data2.sprites.front_default)
            setProfile(data)
        }, 5000);
    }, [])

    return (
        <div className="user">
            <h2>User Details</h2>
            {profile && (
                <div style={{display:'grid',gridTemplateColumns:'1fr 2fr'}} className="profile">
                    <div>
                        <img
                        style={{width:'100%'}}
                        src={img}
                        alt="ditto"
                        />
                    </div>
                    <div>
                        <h3>{profile.username}</h3>
                        <p>{profile.email}</p>
                        <a href={profile.website}>{profile.website}</a>
                    </div>
                </div>
            )}
            {!profile && <SkeletonProfile />}
        </div>
    )
}

export default User
