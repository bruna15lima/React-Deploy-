import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os nutricionistas disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Qual a direfença de enteral e panderal?</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Se pode misturar dietas clínicas com frutas?</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Se pode fazer mingau com as dietas?</label>
            <input type="text" id="time" />
          </div>

          <div className="input-block">
            <label htmlFor="Dieta">Quanto tempo pode ser consumido as dietas de 1L tetra pak?</label>
            <input type="text" id="Dieta" />
          </div>

          <div className="input-block">
            <label htmlFor="Misturar">Se pode misturar dietas clínicas com frutas?</label>
            <input type="text" id="Misturar" />
          </div>

          <div className="input-block">
            <label htmlFor="diferença">Qual a diferença do Trophic Fiber, Trophic Soya e Trophic Basic se todos possuem 1,2cal?</label>
            <input type="text" id="diferença" />
          </div>


          <div className="input-block">
            <label htmlFor="Intestino">O que posso utilizar para relugar o intestino?</label>
            <input type="text" id="Intestino" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Qual a dieta enteral mais rica em proteínas?</label>
            <input type="text" id="Misturar" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Como fazer para o espessante ficar com consistência de mel e pudim?</label>
            <input type="text" id="Misturar" />
          </div>

        </form>
      </PageHeader >
    </div >
  )
}

export default TeacherList;