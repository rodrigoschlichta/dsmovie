import React from 'react';
import { useParams } from 'react-router-dom';
import FormCard from '../../components/FormCard';

const Form = () => {

    const params = useParams();

    return(
       <FormCard movieId = {`${params.movieId}`}/>
);

};

export default Form;