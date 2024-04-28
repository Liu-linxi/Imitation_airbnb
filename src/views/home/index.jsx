import lxRequest from '@/services'
import React, { memo, useEffect, useState } from 'react'

const home = memo(() => {
  const [highScore, setHighAScore] = useState(0)

  useEffect(() => {
    lxRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
      setHighAScore(res)
    })
  }, [])

  return (
    <div>
      <h2>
        {highScore.title}
      </h2>
      <h2>
        {highScore.subtitle}
      </h2>
      <ul>
        {
          highScore?.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default home