import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Admin
import AdminHome from '../pages/Admin/AdminHome';
import AdminTipoUser from '../pages/Admin/AdminTipoUser';
import AdminCadastroAluno from '../pages/Admin/AdminCadastroAluno';
import AdminCadastroColaborador from '../pages/Admin/AdminCadastroColab';
import AdminConsulta from '../pages/Admin/AdminConsulta';
import AdminTipConsulta from '../pages/Admin/AdminTipoCosulta';
import AdminConsultaColborador from '../pages/Admin/AdminConsultaColaborador';

// Aluno
import AlunoEvento from '../pages/Aluno/AlunoEvento';
import AlunoEventoSenai from '../pages/Aluno/AlunoEventoSenai';
import AlunoPerfil from '../pages/Aluno/AlunoPerfil';

// Colaborador
import ColaboradorHome from '../pages/Colaborador/ColaboradorPerfil';

export default function RoutesAplication() {
  return (
    <BrowserRouter>
      <Switch>
        /** Admin */
        <Route path="/" exact component={AdminHome} />
        <Route path="/question" component={AdminTipoUser} />
        <Route path="/aluno" component={AdminCadastroAluno} />
        <Route path="/colaborador" component={AdminCadastroColaborador} />
        <Route path="/question-consult" component={AdminTipConsulta} />
        <Route path="/consultaluno" component={AdminConsulta} />
        <Route path="/consultcolaborador" component={AdminConsultaColborador} />
        /**Aluno */
        <Route path="/atividade" component={AlunoEvento} />
        <Route path="/evento-senai" component={AlunoEventoSenai} />
        <Route path="/aluno-perfil" component={AlunoPerfil} />
        /**Colaborador */
        <Route path="/colaboradorhome" component={ColaboradorHome} />
      </Switch>
    </BrowserRouter>
  );
}
