/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div className="fadeIn">

      {/*<div className="wip"></div>*/}

        <div className="banner-height py4">
          <div className="grid__item__image bg-skuba-banner bg-cover"></div>
        </div>

        <div className="grid__row flex-center py4">
          <div className="grid__item grid__item--p">
            <span className="section-titleWrapper mb3">
              <h2 className="heading--name mt0 mb1">Skuba Design Studio</h2>
              <h4 className="color-softGrey caps f-w-md mt0 mb0">A look into the agency world</h4>
            </span>
            <p className="p-lrg">Throughout my summer at Skuba Design Studio I learned countless valuable lessons, the joys of working on a team, & the importance of being adaptable in a small agency environment.</p>

            <p className="p-lrg">From the importance of contracts to editing a database, I learned so much at Skuba. Although I was brought on for design & front-end tasks, the small agency environment meant that everyone had to jump into areas where they might not necessarily have expertise. This aspect was incredibly beneficial to someone who was new to the industry. I was able to experiment with things I was interested in to solve real problems. Some days involved developing static sites, designing, researching a client’s industry & competition, or building internal tools.</p>

            <p className="p-lrg">While I enjoyed most of the work, I recognized that my passion was greater in the realm of design & front-end work. But I also developed an interest in the process as a whole. The way that each piece of the project came together was fascinating to me.</p>

            <p className="p-lrg">The most valuable aspect of the experience to me was the opportunity to work with a team of intelligent & talented individuals. I learned so much so quickly during my time at Skuba. Far more than I was able to accomplish on my own in a similar amount of time. This led me to realize that although I am a quick, self learner I was able to accomplish a lot more with the help of a team with diverse expertise & backgrounds. I also realized the importance of surrounding yourself with people far smarter than yourself. I would rather be in a room where I feel like I knew nothing but be learning everyday than be in one where I was the smartest but wasn’t learning anything.</p>

            {/*<p className="p-lrg"></p>*/}

        </div>

        </div>

    </div>
    );
  }

}
