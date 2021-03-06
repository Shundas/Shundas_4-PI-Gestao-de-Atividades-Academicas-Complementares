import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MdMenu } from 'react-icons/md';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { MdFace, MdAccessTime } from 'react-icons/md';

import { Background, HeroTitle, HeaderWrapper } from './styled';

export default function Header({ image, text }) {
  return (
    <>
      <HeaderWrapper>
        <nav className="navbar navbar-expand-md navbar-success bg-success menu">
          <div className="flex">
            <Background src={image} alt={text} />
            <HeroTitle>Atividades Complementares</HeroTitle>
          </div>

          <button
            className="navbar-toggler btn"
            type="button"
            data-toggle="collapse"
            data-target="#menuCollapse"
            aria-controls="menuCollapse"
          >
            <MdMenu size={30} color="#fff" />
          </button>

          <div>
            <div
              className="collapse navbar-collapse col-cg-ritgh"
              id="menuCollapse"
            >
              <button
                type="button"
                class="btn btn-success wrap"
                data-toggle="modal"
                data-target="#ModalLong"
              >
                <MdAccessTime size={30} />
              </button>

              <div class="btn-group dropleft">
                <button
                  type="button"
                  class="btn btn-success dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FiUser size={30} />
                </button>
                <div class="dropdown-menu">
                  <button className="btn btn-primary" style={{ width: '100%' }}>
                    <MdFace size={20} style={{ marginRight: '6px' }} />
                    Ver Perfil
                  </button>
                  <button
                    style={{
                      width: '100%',
                    }}
                    className="btn btn-danger"
                  >
                    <FiLogOut style={{ marginRight: '6px' }} />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </HeaderWrapper>

      <div
        class="modal fade"
        id="ModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Suas Horas Validadas
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  Ensino:
                  <h2 className="badge badge-ligth">ensino</h2>
                </li>
                <li className="nav-item">
                  Pesquisa:
                  <h2 className="badge badge-ligth">pesquisa</h2>
                </li>
                <li className="nav-item">
                  Extencao:
                  <h2 className="badge badge-ligth">extensao</h2>
                </li>
                <hr />
                <li className="nav-item">
                  Total:
                  <h2 class="badge badge-ligth">total</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
