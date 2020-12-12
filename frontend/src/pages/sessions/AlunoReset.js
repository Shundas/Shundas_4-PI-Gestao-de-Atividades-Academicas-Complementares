import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../services/api';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../../components/HeaderLogin';

const ContainerApp = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2em;

  padding: 20px;
  border: 1px solid #fff;
  background: #fff;

  border-radius: 20px;
  box-shadow: -1px 1px 16px -9px rgba(0, 0, 0, 0.65);

  input {
    width: 500px;
  }

  .opt {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 180px;
    }
  }
`;

export default function PageSessionAluno() {
  const [email, setEmail] = React.useState('');
  const [erros, setErros] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const history = useHistory();

  const validacao = Object.entries(erros).length;

  const historyReturn = () => {
    return history.push('/aluno-home');
  };

  const data = {
    email,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('/aluno-login', data);

      if ((response.status = 200)) {
        historyReturn();
      }
    } catch (error) {
      if ((error.status = 400)) {
        setTimeout(
          () => {
            setErros('E-mail é obrigatório para redefinir a sua senha');
            setToggle(true);
          },
          setTimeout(() => {
            setToggle(false);
          }, 4000)
        );
      }
    }
  }
  return (
    <>
      <Header />

      <h1 style={{ marginTop: '1.7em' }} className="text-center">
        Insira o seu e-mail para redefinição da sua senha!
      </h1>

      {!toggle && ''}
      {toggle && (
        <div className="container">
          <div style={{ textAlign: 'center' }} className="alert alert-danger">
            {erros}
          </div>
        </div>
      )}

      <ContainerApp className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="opt">
            <button className="btn btn-primary">Enviar</button>
            <Link to="/auth-aluno">Voltar</Link>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
