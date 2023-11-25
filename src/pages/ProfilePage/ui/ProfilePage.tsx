import React, { FC } from 'react'
import Profile from '../../../features/Profile'
import ProfileProps from '../../../features/Profile/Profile.interface'

const ProfilePage: FC<ProfileProps> = ({ user }) => {
  return (
    <div><Profile user={user}/></div>
  )
}

export default ProfilePage