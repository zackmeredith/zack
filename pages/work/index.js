import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <section className="intro">
        <h1 className="heading--name">Work</h1>
      </section>

      <div className="wip"></div>

        <div className="grid fadeIn">

        <div className="grid__row">
          <div className="grid__item grid__item--half-even sm-even-pad-right">
            <div className="grid__item__image bg-work1"></div>

          </div>

          <div className="grid__item grid__item--half-even sm-even-pad-left">

              <div className="grid__item__image bg-work2"></div>

          </div>

        </div>


        <div className="grid__row">
          <div className="grid__item grid__item--half-even sm-even-pad-right">
            <div className="grid__item__image bg-work3"></div>

          </div>

          <div className="grid__item grid__item--half-even even-pad sm-even-pad-left">

              <div className="grid__item__image bg-work4"></div>

          </div>

        </div>


        <div className="grid__row">
          <div className="grid__item grid__item--half-even sm-even-pad-right">
            <div className="grid__item__image bg-work5"></div>

          </div>

          <div className="grid__item grid__item--half-even sm-even-pad-left">

              <div className="grid__item__image bg-work6"></div>

          </div>

        </div>


          </div>
      </div>
    );
  }

}
