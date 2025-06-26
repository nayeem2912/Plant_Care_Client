import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className="max-w-sm mx-auto mt-10">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="rounded-full w-32 h-32 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-semibold text-green-700">{user.displayName}</h2>
          <p className="text-gray-600">📧 {user.email}</p>
          <p className="text-gray-600">📞 +8801572654556</p>
          <div className="card-actions mt-4">
            <button className="btn btn-outline btn-success">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;