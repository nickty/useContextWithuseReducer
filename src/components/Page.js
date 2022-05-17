import React, { useContext } from 'react'

import appContext from '../context/app-context'

const Page = () => {

    const {message} = useContext(appContext)
  return (
      <>

<div>Page</div>
    {message}
      </>
    
  )
}

export default Page