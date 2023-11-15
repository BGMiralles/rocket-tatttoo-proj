import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './GalleryView.css';
import { bringTattooArtists } from '../../services/apiCalls';
import { FlipCardArtist } from '../FlipCardArtist/FlipCardArtist';

export const GalleryArtists = () => {
  const [tattooArtists, setTattooArtists] = useState([]);

  useEffect(() => {
    const fetchTattooArtists = async () => {
      try {
        const response = await bringTattooArtists();
        setTattooArtists(response.data.data);
      } catch (error) {
        console.error('Error fetching tattoo artists data:', error);
      }
    };

    fetchTattooArtists();
  }, []);

  return (
    <Container fluid className="d-flex align-items-center justify-content-center h-100">
      <Row className="gallery-container">
        {tattooArtists.map((artist, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <FlipCardArtist tattoo_artist={artist.tattoo_artist} description={artist.description} photo={artist.photo} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
