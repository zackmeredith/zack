// import { join, dirname } from 'path'
// import fs from '../tools/lib/fs'
// import { readdirSync, readFileSync } from 'fs'
// // import path from 'path'
// import fm from 'front-matter'
// import marked from 'marked'
// import markedRenderer from '../marked-renderer'
//
// import cheerio from 'cheerio'
//
// const dir = '../pages/writing'
//
// const filenames = readdirSync(dir)
//   .filter((filename) => {
//     return !/^\./.test(filename)
//   })
//   const posts = filenames.map(function (filename) {
//   // var content = readFileSync(join(dir, filename), 'utf8')
//   var content = readFileSync(join(dir, filename), 'utf8')
//   var matter = fm(content)
//   var html = marked(matter.body, { renderer: markedRenderer })
//   var $ = cheerio.load(html)
//   var excerpt = matter.attributes.excerpt || $('p').first().text()
//   var post = {
//     // ...matter.attributes,
//     slug: filename.replace(/\.md/, ''),
//     body: matter.body,
//     html: html,
//     excerpt: excerpt
//   }
//
//   return post
// }).sort(function (a, b) {
//   return new Date(b.created) - new Date(a.created)
// })
//
// const postData = {
//   posts
// }
//
// module.exports = postData
