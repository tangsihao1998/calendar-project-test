import React, { useEffect } from 'react'

import './NotFoundPage.scss';
// import Material 
import { Button } from '@material-ui/core';

const NotFoundPage = (props) => {
  useEffect(() => {
    document.title = props.pageTitle;
  });

  return (
    <React.Fragment>
      <div className="NotFoundPage">
        <img className="NotFound__images" src="/assets/png/404.png" alt="Not Found"/>
        <h1 className='NotFound__title'>Trang Không Tìm Thấy</h1>
        <Button className='NotFound__btn' color="primary" onClick={() => props.history.push('/')} >
          Trở Về Trang Chủ
        </Button>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;