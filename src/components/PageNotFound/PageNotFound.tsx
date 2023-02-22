import React from 'react'
import pageError from '../../assets/images/PageNotFound.png';
import './PageNotFound.css';

const PageNotFound: any = () => {
  return (
    <div className='page_not_found'>
      <div className='page_not_found_img'>
        <img src={pageError} alt="Page Not Found" />
      </div>
    </div>
  )
}

export default PageNotFound
