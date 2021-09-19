import React from 'react'
import { useRouter } from 'next/router'

function NoteCatchAll() {
  const router = useRouter()
  const { params } = router.query

  return (
    <div>
      <ul>
        {params.map((param) => (
          <li>{param}</li>
        ))}
      </ul>
    </div>
  )
}

export default NoteCatchAll
