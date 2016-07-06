import React, { Component } from 'react';
export default class extends Component {



  render() {
    return (
      <div className="fadeIn">

      {/*<div className="wip"></div>*/}

        <div className="banner-height py4">
          <div className="grid__item__image bg-famis-banner bg-cover"></div>
        </div>
        <div className="grid__row flex-center py4">
          <div className="grid__item grid__item--p">
            <span className="section-titleWrapper mb3">
              <h2 className="heading--name mt0 mb1">Loyola University New Orleans</h2>
              <h4 className="color-softGrey caps f-w-md mt0 mb0">Department of Film & Music Industry Studies</h4>
            </span>
            <p className="p-lrg">Designing for a set amount of predetermined content is usually relatively straightforward. But designing for the unknown introduces so many new issues to solve. The site for Loyola University New Orlean’s Department of Film & Music Industry Studies is constantly evolving. They needed a system that would not only account for what they offered now, but one that was flexible & allowed them to build out new parts of the site quickly without touching code.</p>


              <span className="section-titleWrapper mt3 mb3">
                <h3 className="heading--name mt0 mb0">The Problems</h3>
              </span>

              <p className="p-lrg">There were a few core problems that I set out to solve with creating this new design & system. I wanted to create a system that would allow the department to create new pages & featured content easily, but with a great amount of flexibility. I also wanted to reduce the information density of the pages & allow visitors to quickly scan for what they were looking for.</p>

              <span className="section-titleWrapper mt3 mb3">
                <h3 className="heading--name mt0 mb0">Information Overload</h3>
              </span>
              <p className="p-lrg">One of the main issues with the old site was that visitors were immediately presented with a large amount of information & much of this information was not pertinent to that specific person’s interests. But at the same time, the department had several kinds of content it wanted to feature regularly to people visiting the site.</p>
              <p className="p-lrg">To address that, I designed & implemented this tile system below. With this visitors could quickly scan the tiles on the homepage & get an idea of what was on the site without sifting through large amounts of information. For the regular tiles, a person would be able to either jump directly to a piece of featured content or explore more like it by tapping its category or content type label above the title of the tile. A custom tile can also be created on the backend to allow for more flexibility.</p>
          </div>


      <div className="grid__item grid__item--full h-img-lrg mb3">
        <div className="h-100 w-100 bg-famis-home bg-contain"></div>

      </div>
      <div className="grid__item grid__item--p">

      <p className="p-lrg">In addition to the tiles, I tried to replace the complicated homepage with easy to find navigation & search along with a hero section that immediately gave the visitor an idea of what the site offered.</p>

      <p className="p-lrg">This section immediately shows the visitor copy which explains the mission of the department along with links to the most important actions on the site & an overview video. This video shows what differentiates the department & offers personal stories from students & professors.</p>

      <p className="p-lrg">The accent maroon color & gradient were used to lead the visitor’s eyes to the most important parts of the homepage. With the large amount of content that the department is now creating, it was important for the visitor to quickly be able to notice the search functionality. Coupled with that on large screens was the most important CTA for prospective students visiting the site & the menu button on smaller devices.</p>

      </div>
      <div className="grid__item grid__item--full h-img-lrg mt3 mb3">
        <div className="grid__item__image bg-famis-mobile-home bg-contain"></div>
      </div>


      <div className="grid__item grid__item--p mb3">


        <span className="section-titleWrapper mt3 mb3">
          <h3 className="heading--name mt0 mb0">Full Module System</h3>
        </span>

      <p className="p-lrg">After developing the tile system I realized that it would be possible to create a similar system for creating full page layouts. This led to designing & developing a set of modules for text, videos, images, links, & lists all contained within blocks which could be endlessly composable.</p>

        <p className="p-lrg">In the backend, these blocks can be created & managed without touching any of the code. This was incredibly important as most of the people managing content in the future will be office & student workers. Content managers can choose the size & type of module they need & add it in wherever they need it.</p>
      </div>



      <div className="grid__item grid__item--two-thirds h-img-lrg mb3 p0">
        <div className="h-min-200 h-100 w-100 bg-famis-tiles bg-contain shadow-lrg"></div>
      </div>

      <div className="grid__item grid__item--two-thirds h-img-lrg mb3 p0">
        <div className="h-min-200 h-100 w-100 bg-famis-tiles2 bg-contain shadow-lrg"></div>
      </div>


    <div className="grid__item grid__item--p">


      <span className="section-titleWrapper mt3 mb3">
        <h3 className="heading--name mt0 mb0">Still Evolving</h3>
      </span>

    <p className="p-lrg">This project is still evolving & I'll be refining the design/code over time. If you're interested, you can follow along with the project on <a href="https://dribbble.com/zackmeredith/projects/367084-FAMIS" target="_blank" className="txt-link">Dribbble</a>.</p>
  </div>
</div>
      </div>
    );
  }

}
