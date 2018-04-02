import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Card from '../card/card-component';
import Spinner from '../spinner/spinner';

const styles = {
  movieColumn: {
    marginBottom: 20,
    padding:'0px'
  }
}
const CardListComponent = ({movies, isLoading}) => {
  console.log('isloading '+isLoading);

  const movieColumns = movies && !isLoading ? movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={4} lg={4}>
      <Card movie={movie} />
    </Col>
  )) : <Spinner isLoading={isLoading} />;
  
  return (
    <Row>
      {movieColumns}
    </Row>
  );
}

export default CardListComponent;