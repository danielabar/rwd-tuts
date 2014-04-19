Responsive Web Design
====

Course notes and sample code from [Responsive Web Design for Beginners](https://tutsplus.com/course/responsive-web-design-for-beginners/) with [TutsPlus](https://tutsplus.com/)

Scaffolded with [yeoman](https://github.com/yeoman/yeoman.io) and [generator-webapp](https://github.com/yeoman/generator-webapp)

To run ```grunt serve```

It has live reload, so simply save changes to any html or css and it will be automatically refreshed in the browser.

- [Fluid Layout](#user-content-fluid-layout)
- [Elastic Layout](#user-content-elastic-layout)
- [Hybrid Layouts](#user-content-hybrid-layouts)
- [Building a Fluid Grid](#user-content-building-a-fluid-grid)
- [Flexible Images](#user-content-flexible-images)
- [Media Queries](#user-content-media-queries)
- [Breakpoints](#user-content-breakpoints)
- [Mobile First](#user-content-mobile-first)

### Fluid Layout
Convert fixed width containers to percentages, so that columns resize according to browser window.
Flexibility is in terms of dimensions.

### Elastic Layout
Flexible in other ways. Example, font size:
  ```css
  font: 100%/1.5em Helvetica,Arial, sans-serif;
  ```

Text 100% of browser default font size, which is usually 16px.

Line height is 1.5em.
Em is flexible unit of measurement, relative to font size.
In this case, will be 1.5 * 16px = 24px

Also want to control the "measure", length of any given line.
On high resolutions, screen will be wider.
The longer the measure, the less comfortable it is for reader to follow along a long line of content.

Optimal measure value is 60 - 80 characters.

Can use em's in container width (but makes width effectively static)
  ```css
  .container {
    background: #edede1;
    width: 55em;
    margin: 0 auto;
  }
  ```

### Hybrid Layouts
Mixture of other layouts. Example, make left section fluid, and smaller right aside section fixed.

Sample use case: online advertising, might want fluid left hand content section, and fixed width ads on right-hand side:
  ```css
  section {
    width: 65%;
    float: left;
  }

  aside {
    background: #d1d1c1;
    width: 300px;
    float: right;
  }
  ```

Above works, except when browser width is shrunk to point where 300px is too wide to fit in remaining space, ad falls below:
![alt text](https://github.com/danielabar/rwd-tuts/blob/master/hybrid-layout-issue.gif "Hybrid Layout Issue")

Solution is to use css to mimic table behaviour, i.e. a single fixed width cell with remainder fluid.

Only need to specify width of ```aside``` and the main left section will adjust accordingly:
  ```css
  .container {
    background: #edede1;
    width: 90%;
    margin: 0 auto;
    display: table;
  }

  section {
    display: table-cell;
  }

  aside {
    background: #d1d1c1;
    width: 300px;
    display: table-cell;
  }
  ```

For browser support, check [Can I Use](http://caniuse.com/#feat=css-table)

Note that css table display widely supported, except not IE 7.0

### Building a Fluid Grid
Example of building a 16 column grid. Each column should be 100% / 16 columns wide = 6.25.
  ```css
  .container .columns.one       {   width: 6.25%;   }
  .container .columns.two       {   width: 12.5%;   }
  .container .columns.three     {   width: 18.75%;  }
  .container .columns.four      {   width: 25%;     }
  /* etc up to .four 100% */
  ```

Problem with this simple system, if you add a border to columns (aka gutter), the 16 width won't fit and will start wrapping to next line.
Solution is to use ```border-sizing``` attribute such that borders and padding are measured inside the element, and keep the total width the same (like old IE6 box model).
  ```css
  * {
    -moz-boz-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  ```
Another problem, if content in one cell wraps, the rows below don't clear. Solution, need a "row" class to explicitly clear.

### Flexible Images
Use ```max-width``` to ensure all images remain within their containers, so extra large images don't mess up the layout.
  ```css
  img {
    max-width: 100%;
    height: auto;
  }
  ```

Performance issue: Still loading large image, can be issue for mobile devices, no point in loading 2000px wide image if will get resized and displayed at 300px width.

### Media Queries
A media query is a conditional statement. Example, if the page that is being viewed is being printed, then use this stylesheet:
  ```html
  <link rel="stylesheet" type="text/css" media="print" href="print.css">
  ```

CSS3 media queries are more advanced than simply ```screen``` or ```print```.
Can use attributes such as max-width, min-width, height, orientation of viewport in conditional statements.
Example, when screen is this wide, or this hide, then use this style.

Simple example, change header color when viewport width <= 520 px:
  ```css
  @media screen and (max-width: 520px) {
    h1 {
      color: red;
    }
  }
  ```

[Tutorial for further practice with media queries](http://webdesign.tutsplus.com/articles/a-basic-responsive-grid-plus-handy-css3-media-query-reporter--webdesign-5121)

### Breakpoints
Point in screen width where decision is made to change the styles.

For smaller screens, can make columns take up 100% of the width for legibility.

Can also choose to load a smaller image or not load any image.
But since css is read from top down, if have large image referenced first, it will still be loaded,
even if later there is a media query to not display it.

### Mobile First
Sequentially order the css styles so the defaults are for mobile/smaller screens.
Then add media queries for larger/desktop screens.