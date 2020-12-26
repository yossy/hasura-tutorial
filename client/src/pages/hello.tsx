import React from 'react'
import { useGetUsersQuery } from '../generated/graphql'
import { client } from '../utilities/apollo-client'

const HelloPage: React.FC = () => {
  const { loading, error, data } = useGetUsersQuery({ client })

  if (loading) return <div>loading...</div>
  if (error) return <div>ERROR {error.message}</div>

  return (
    <div style={{whiteSpace: 'pre-wrap' }}>
      {data.users[0].id}
      {data.users[0].firstName}
    </div>
  )
}

export default HelloPage
