---
title: Nebo Agency
date: 2016-02-01
layout: Post
hero: http://rooooster.com/assets/img/chess/figures/figure-04-hd.jpg
---

Front-end development of Newsman site

<iframe src="http://rooooster.com/newsman/"></iframe>

```js
const StatelessComponent = (props) => {
  return (
    <div>
      I‘m a stateless component that accepts children
      { props.children }
    </div>
  )
}

// ...

  return (
    <StatelessComponent>
      Example of child
    </StatelessComponent>
  )
```
