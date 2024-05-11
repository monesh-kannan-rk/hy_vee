import React from 'react'

function Data({details, anime}) {
  return (
      <div>
        <div className={`glass_card ${anime ? 'card-anime':''}`}>
          <div className='main'>
            <h2>Details</h2>
            <hr/>
            <div className='detail_form'>
                <div className='left-field'><h3>Name</h3></div>
                <div className='right-field pink'><strong><em>{details.name ? details.name.toUpperCase() : '-'}</em></strong></div>
            </div>
            <div className='detail_form'>
                <div className='left-field'><h3>Age</h3></div>
                <div className='right-field pink'><strong><em>{details.age ? details.age.toString().toUpperCase() : '-'}</em></strong></div>
            </div>
            <div className='detail_form'>
                <div className='left-field'><h3>Gender</h3></div>
                <div className='right-field pink'><strong><em>{details.gender ? details.gender.toUpperCase():'-'}</em></strong></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Data