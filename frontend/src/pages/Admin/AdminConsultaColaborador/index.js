import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import styled from 'styled-components';
import Header from '../../../components/HeaderAdmin';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../../../services/api';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 14px;
    padding-right: 14px;
  }
  .cen {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 14px;
    padding-right: 14px;
  }
`;

const Nopit = styled.div`
  position: absolute;

  border: 0;

  top: 90px;
  left: 30px;

  width: 38px;
  height: 38px;
  background: #28a745 !important;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
  cursor: pointer;
`;

export default function AdminConsultaColaborador() {
  const [consultaDados, setConsultaDados] = useState([]);

  useEffect(() => {
    async function getDadosColaborador() {
      await api.get('/consultaColaborador').then(x => setConsultaDados(x.data));
    }
    getDadosColaborador();
  }, []);

  return (
    <Fragment>
      <Header />

      <div className="container">
        <h2
          style={{ marginTop: '2em', marginBottom: '1em' }}
          className="text-center"
        >
          Consulta de colaboradores
        </h2>
      </div>

      <Nopit>
        <Link to="/question-consult" className="btn btn-primary button">
          <FiArrowLeft />
        </Link>
        <Link to="/admin-home" className="btn btn-success button">
          <FiHome />
        </Link>
      </Nopit>

      <Container className="container">
        <form className="form-row">
          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="cen">
            <span>{'='}</span>
          </div>

          <div className="form-column">
            <input
              className="form-control"
              type="text"
              id="id1"
              placeholder="Nome"
            />
          </div>

          <div className="btns">
            <button className="btn btn-primary">Filtrar</button>
          </div>
        </form>
      </Container>

      <Container className="container-fluid">
        <table className="table">
          <thead className="bg-success">
            <tr>
            <th scope="col" style={{ color: '#fff' }}>
                Nome
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                E-mail
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                CPF
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Telefone
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Perfil
              </th>
              <th scope="col" style={{ color: '#fff' }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {consultaDados.map(x => (
              <tr key={x.iduser}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.cpf}</td>
                <td>{x.phone}</td>
                <td>{x.role}</td>

                <td>
                  <button className="btn btn-outline-success">
                    Vizualizar
                  </button>
                  <button className="btn btn-outline-primary">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Fragment>
  );
}
