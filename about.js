import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <section className="intro">
        <h1 className="heading--name">About</h1>
      </section>

      <div className="wip"></div>


      <div className="grid fadeIn">

      <div className="grid__row">
        <div className="grid__item grid__item--half ">
          <h3>Hey</h3>
          <p>I'm Zack.</p>

        <p>I'm a designer & front-end developer trying to make useful things in New Orleans, La. When I'm not at my computer I'm usually <a href="http://tarenottear.bandcamp.com/releases" target="_blank" className="txt-link">playing guitar</a> or riding my bike.</p>
        </div>

        <div className="grid__item grid__item--half">

            <div className="grid__item__image bg-self"></div>

        </div>

        </div>

        <div className="grid__row">


        <div className="grid__item grid__item--one-third sm-right">
          <div className="wip sm-show"></div>
          <p>I'm obsessed with the intersection of functionality & beauty. I try to use this passion to contiously better myself so that I might craft things which have a positive effect on the lives of others.</p>
        </div>

        <div className="grid__item grid__item--two-thirds sm-left">

            <div className="grid__item__image bg-comp"></div>

        </div>

      </div>

        <div className="grid__row">

        <div className="grid__item grid__item--half ">
          <div className="wip sm-show"></div>
        <p>My passion for music has allowed me to tour half the U.S. with my best friends & meet countless inpiring people.
        </p>
        <p>These experiences not only exposed me to amazing creatives, but also to the importance of community building & cultivating relationships.
        </p>
        <p>My band Tare has a demo from our new album towards the end of our friends at Community Records' latest sampler. Give it a listen <a className="txt-link" href="http://communityrecords.bandcamp.com/album/community-records-compilation-vol-5" target="_blank">here</a>.</p>
        </div>

        <div className="grid__item grid__item--half">

            <div className="grid__item__image bg-guit"></div>

        </div>
      </div>


      {/*<div className="grid__row">
        <div className="grid__item grid__item--half ">
          <h3>Contact</h3>

        <p>I'm a designer and front-end developer trying to make useful things in New Orleans, La. When I'm not at my computer I'm usually <a href="" className="txt-link">playing guitar</a> or riding my bike.</p>
        </div>

        <div className="grid__item grid__item--half">


        </div>

        </div>*/}

        <div className="grid__row">

        <div className="grid__item grid__item--full">
          <div className="grid__item__image bg-nl"></div>
        </div>

      </div>

      </div>
    </div>
    );
  }

}
