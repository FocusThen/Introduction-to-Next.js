import React from 'react'
import { useRouter } from 'next/router'

function Note() {
  const router = useRouter()
  const { id } = router.query
  return <div>Note {id}</div>
}

export default Note
