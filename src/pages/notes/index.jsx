import React from 'react'
import Link from 'next/link'

function Notes() {
  return (
    <div>
      Notes home
      <Link href="/notes/[id]" as={'/notes/1'}>
        <a>Note 1</a>
      </Link>
    </div>
  )
}

export default Notes
