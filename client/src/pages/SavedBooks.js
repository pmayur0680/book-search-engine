import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

const SavedBooks = () => {
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
      <h2>
        
        </h2>
        <CardColumns>
       
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
