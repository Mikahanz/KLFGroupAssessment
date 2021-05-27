import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  // Get userLogin State from APP Level State - This verify if a user already loggedin
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {}, [dispatch, keyword, pageNumber]);

  return (
    <>
      <div>
        {userInfo && (
          <div>
            <h2>{userInfo.name} is Logged In!</h2>{' '}
            <h4>using - {userInfo.email}</h4>
          </div>
        )}
        <Image src='/nasa.jpg' fluid />
      </div>
    </>
  );
};

export default HomeScreen;
