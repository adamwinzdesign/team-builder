import React from 'react';

const MemberCard = props => {
  return (
    <div className = 'member-list'>
      {props.memberCard.map(member => (
        <div className = 'member' key= {member.id}>
          <h1>{member.name}</h1>
          <h2>{member.email}</h2>
          <h2>{member.role}</h2>
        </div>
      ))}
    </div>
  )
}

export default MemberCard;