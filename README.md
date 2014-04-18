Responsive Web Design
====

Course notes and sample code from [Responsive Web Design for Beginners](https://tutsplus.com/course/responsive-web-design-for-beginners/) with [TutsPlus](https://tutsplus.com/)

Scaffolded with [yeoman](https://github.com/yeoman/yeoman.io) and [generator-webapp](https://github.com/yeoman/generator-webapp)

To run ```grunt serve```

It has live reload, so simply save changes to any html or css and it will be automatically refreshed in the browser.

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