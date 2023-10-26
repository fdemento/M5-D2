import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import booksData from './data/scifi.json';

const AllTheCover = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      try {
        setBooks(booksData);
      } catch (error) {
        console.error("Si è verificato un errore durante il caricamento dei libri:", error);
      }
    }, []);
  
    const createBookRows = () => {
      let rows = [];
      let cols = [];
      books.forEach((book, index) => {
        cols.push(
          <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={book.img} alt={`Copertina di ${book.title}`} />
            </Card>
          </Col>
        );
  
        if ((index + 1) % 4 === 0 || index + 1 === books.length) {
          rows.push(<Row key={index}>{cols}</Row>);
          cols = []; // Reset delle colonne per la nuova riga
        }
      });
      return rows;
    };
  
    return (
      <Container>
        <h1 class="my-5">Copertine dei Libri</h1>
        {createBookRows()}
      </Container>
    );
  };
  
  export default AllTheCover;