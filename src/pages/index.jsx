import React from 'react'
import Link from 'next/link'

function HomePage() {
  return (
    <div>
      Home page
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}

export default HomePage
