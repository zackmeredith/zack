import React, { Component } from 'react';
import Link from '../components/Link';

export default class extends Component {

  render() {
    return (
      <div>
        <section className="intro fadeIn">
        <h1 className="heading"><span className="heading--name">Zack Meredith</span>, lifelong musician turned designer & front-end web developer.</h1>

        <ul className="social-list">
          <li className="social-list__item"><a href="https://twitter.com/zackmeredith" target="_blank"><i className="fa fa-twitter"></i></a></li>
          <li className="social-list__item"><a href="https://dribbble.com/zackmeredith/" target="_blank"><i className="fa fa-dribbble"></i></a></li>
          <li className="social-list__item"><a href="https://github.com/zackmeredith/" target="_blank"><i className="fa fa-github"></i></a></li>
          <li className="social-list__item"><a href="https://instagram.com/zackmeredith/" target="_blank"><i className="fa fa-instagram"></i></a></li>
          <li className="social-list__item"><a href="https://codepen.io/zackmeredith/" target="_blank"><i className="fa fa-codepen"></i></a></li>

        </ul>
      </section>

      <div className="wip"></div>



        <section className="work fadeInSlideUp">
          <h3 className="section__title"><span className="section__title__border-wrap">Work</span></h3>

            <div className="job__wrapper">
              <div className="job">
                <h4 className="job__company">LOYNO: Dept. of Film & Music Industry Studies</h4>
                <span className="job__position">Designer & Front-end developer </span><span className="job__duration">(Fall 2015 - Present)</span>
                  <p className="job__summary">I'm helping to redesign and develop the Loyola University New Orleans: Dept. of Film & Music Industry Studies site to both reflect their expansion and prepare for further growth.</p>
                  <a className="btn" href="/work/loyola" onClick={Link.handleClick}>Read More</a>
              </div>
              <div className="job">
                <h4 className="job__company">Skuba Design Studio</h4>
                <span className="job__position">Design & Front-end development Intern </span><span className="job__duration">(Summer 2015)</span>
                <p className="job__summary">Developed static client websites, created web assets for the angency, and dove into a database or two.</p>
                <a className="btn" href="/work/skuba" onClick={Link.handleClick}>Read More</a>
              </div>

              <div className="job">
                <h4 className="job__company">Freelance</h4>
                <span className="job__position">Designer, Web Developer</span>
                  <p className="job__summary">Worked with clients to translate their personal brands or businesses to the Web through design and development.</p>
                  {/*<a className="btn" href="/work/freelance" onClick={Link.handleClick}>Read More</a>*/}
              </div>

            </div>
        </section>

        <div className="half-section__wrapper fadeInSlideUp">
        <section className="contact half-section">
          <h3 className="section__title">Contact</h3>

        <p>
          I’m always interested in working on new projects and would love to hear about yours. <a className="txt-link" href="mailto:zacharybmeredith@gmail.com?subject=YOUR%20SUBJECT%20">Email me</a> if you would like to work together.
        </p>
        </section>
        </div>
      </div>
    );
  }

}
