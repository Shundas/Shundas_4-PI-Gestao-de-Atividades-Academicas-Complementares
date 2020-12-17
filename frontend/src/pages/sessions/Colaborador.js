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
  const [senha, setSenha] = React.useState('');

  const [erros, setErros] = React.useState('');
  const [toggle, setToggle] = React.useState(false);
  const history = useHistory();

  function historyReturn(path) {
    return history.push(`/${path}`);
  }

  const data = {
    email: email,
    senha: senha,
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post('/colaborador-login', data);
      const { senhaTemp } = response.data;
      const { userId } = response.data;

      localStorage.setItem('iduserSenai', userId);

      if ((response.status = 200)) {
        if (senhaTemp === false) {
          return historyReturn('colaboradorhome');
        } else if (senhaTemp === true) {
          return historyReturn('form-auth-recuperasenhaColab');
        }
      }
    } catch (error) {
      if ((error.status = 400)) {
        setTimeout(
          () => {
            setErros('Usuário ou Senha Inválidos');
            setToggle(true);
            console.log(Response.error);
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
        Acesso Colaborador!
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
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              id="pass"
              className="form-control"
            />
          </div>
          <div className="opt">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
            <Link to="/auth-colab-recuperasenha">Esqueci minha Senha</Link>
          </div>
        </form>
      </ContainerApp>
    </>
  );
}
