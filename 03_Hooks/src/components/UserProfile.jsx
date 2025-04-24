import React, { useEffect, useState } from 'react';



const UserProfile = ({ userID }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        // Function to search data
        const fetchUser = async () => {
            const answer = await fetch(
                `https://jsonplaceholder.typicode.com/users/${userID}`
            );

            const dataUser = await answer.json();

            setUser(dataUser);
        };

        if(userID){

            fetchUser();
        
        }
    } , [userID] );

  return (
    <div>
        {user ? (
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
            </div>
            ) : (
                <p>Loading user profile</p>
            )}
      
    </div>
  );
};

export default UserProfile;

