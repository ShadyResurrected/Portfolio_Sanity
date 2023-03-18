import React from 'react'

import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import Tooltip from '@mui/material/Tooltip';


const SocialMedia = () => {
  return (
    <div className='app__social'>

      <Tooltip title="Github" placement="right" arrow style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/ShadyResurrected', '_blank')} >
        <div>
          <BsGithub />
        </div>
      </Tooltip>

      <Tooltip title="LeetCode" placement="right" arrow style={{ cursor: 'pointer' }} onClick={() => window.open('https://leetcode.com/cchandra554/', '_blank')}>
        <div>
          <SiLeetcode />
        </div>
      </Tooltip>

      <Tooltip title="Linkedin" placement="right" arrow style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/chandradeep-chandra-805388135/', '_blank')}>
        <div>
          <BsLinkedin />
        </div>
      </Tooltip>


      <Tooltip title="Hackerrank" placement="right" arrow style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.hackerrank.com/cchandra554', '_blank')}>
        <div>
          <SiHackerrank />
        </div>
      </Tooltip>


    </div>
  )
}

export default SocialMedia