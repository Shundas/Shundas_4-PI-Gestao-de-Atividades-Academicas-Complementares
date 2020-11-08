import React, { Fragment } from 'react';
import Header from '../../components/Header';
import logo from '../../images/logo.svg';
export default function ConsultaRegras() {
  return (
    <Fragment>
      <Header
        image={logo}
        text="Imagem da Logo"
        title="Atividades Complementares"
        ensino="Ensino"
        pesquisa="Pesquisa"
        extencao="Extenção"
        total="Total"
      />
    </Fragment>
  );
}
