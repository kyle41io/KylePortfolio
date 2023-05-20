import React from 'react'

const Details = ({position, company, companyLink, time, address, work}) => {
  return <li>
      <div>
        <h3>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
        <span>
          {time} | {address}
        </span>
        <p>
          {work}
        </p>
      </div>
  </li>
}

const Experience = () => {
  return (
    <div id='experience' className='mt-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center '>Experience</h2>

      <div className='w-[75%] mx-auto relative  '>

        <ul>
          <Details position="Software Engineer Intern" company="KPIM" companyLink="https://kpim.vn" time="3/2023-Present" address="Tay Ho, Ha Noi"
          work="Participate in the company's intern training program. Analyze system design and build projects based on my own ideas. Access to Microsoft's Power Apps low-code app building system." />
        </ul>

      </div>
    </div>
  )
}

export default Experience