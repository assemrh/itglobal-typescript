import React from 'react';
import { Alert } from 'react-bootstrap';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Grid from './Grid';
import Spinner from './Spinner';



const Home = () => {
    const {
        state,
        loading,
        error
    } = useHomeFetch();
    console.log(`state in home`, state)
    if (error) return <Alert variant='danger'> Something went wrong ...  </Alert>;
    return (
      <>
        <Grid users={state.results} />

        {loading && <Spinner />}
      </>    
    )
}

export default Home
