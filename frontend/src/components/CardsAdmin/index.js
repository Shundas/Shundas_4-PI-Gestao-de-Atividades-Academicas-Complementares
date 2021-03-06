import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { Container, Grid } from './styled';
import 'bootstrap/dist/css/bootstrap.css';

export default function CardsAdmin() {
  return (
    <Container>
      <div>
        <Grid>
          <div className="card" style={{ width: '18rem' }}>
            <Link to="/question">
              <div className="card-body">
                <h5 className="card-title">Criar Usuário</h5>
                <FiPlus size={25} color="blue" className="icon" />
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <Link to="/question-consult">
              <div className="card-body">
                <h5 className="card-title">Consultar Usuários</h5>
                <MdSearch size={25} color="blue" className="icon" />
              </div>
            </Link>
          </div>
        </Grid>
      </div>
    </Container>
  );
}
