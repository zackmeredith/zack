/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

export default ({ post }) =>

<main itemScope itemType='http://schema.org/BlogPosting'>
   <article>
     {/*<h1 itemProp='headline'>{post.title}</h1>
     <div itemProp='author'>{post.author}</div>
     <time itemProp='datePublished' content={post.date}>{prettyDate(post.date)}</time>*/}
     {/*<div itemProp='articleBody' dangerouslySetInnerHTML={{ __html: post.__content }} />*/}
   </article>
 </main>
