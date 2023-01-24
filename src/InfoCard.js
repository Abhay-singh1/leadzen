import React, {useState, useEffect} from 'react'
import './info.css'

const InfoCard = ({users}) => {
    
    
    const [showDescription, setShowDescription] = useState(false);
    
    


    return (<div className='main-div'>
        <div className='info-card'>
            <div className='info'>
                {users.name}
            </div>
            <div className='infos'> 
                <div className='bold-words'>User-Name</div>
                {users.username}
            </div>
            <div className='infos'>
                <div className='bold-words'>Email</div>
                {users.email}
            </div>
            <div className='infos'>
                <div className='bold-words'>Contact</div>
                {users.phone}
            </div>
            <button onClick={() => setShowDescription(!showDescription)} className='btn'>
                View Details
            </button>
        </div>
            {
                showDescription && 
                <div className='description'>
                    <div className='bold-words'>Address</div>
                    {users.address.street},{users.address.suite},{users.address.city},{users.address.zipcode}
                    <div className='bold-words'>Website</div>
                    {users.website}
                    <div className='bold-words'>Company</div>
                    {users.company.name}

                </div>
            }
        </div>
    )
}

export default InfoCard