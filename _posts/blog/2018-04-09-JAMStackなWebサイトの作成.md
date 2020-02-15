---
layout: blog
title: Creating a JAM Stack website
summary: I had a chance to create a new website, so I decided to build it using a method called JAM Stack . JAM Stack is a serverless framework composed of JS + API + Markup.
date: '2018-04-09T15:00:00+09:00'
dateModified: '2020-02-14T23:00:00+09:00'
thumbnail: /blogImages/20180409.png
---
NOTE: This is first blog post the creator of this template made. I translated it from Japanese and posted it here to give background on the creation of the site!

I had a chance to create a new website, so I decided to build it using a method called JAM Stack . JAM Stack is a serverless framework composed of JS + API + Markup.

## About JAM Stack
### Characteristics
* Frontend is completely separate from backend
* Build static files (HTML, JS) in advance by using Static Site Generator: [Static Site Generator](https://www.staticgen.com/) 
* Screen description is basically done only with JS
* Distribute all built files on CDN
* Manage all project data on Git
* Use the latest build tools such as Babel, PostCSS, Webpack
* Automatic build / auto deploy
* If you need server-side functionality, hit the API with Ajax

### Merit
* High Performance
* High security
* Easy and cheap to scale
* Developer friendly

### Demerit
* In principle, it cannot be applied to web applications that have a strong connection between client and server

## About this website

### URL
<a href="https://www.yuuniworks.com" target="_blank">https://www.yuuniworks.com</a>
（<a href="https://github.com/junkboy0315/yuuni-web" target="_blank">source code</a>）
### Diagram
![Diagram](/blogImages/20180409.png)

### Characteristic
In addition to the standard JAM Stack configuration, the following two functions have been added.

* Content editing function using GUI by Netlify CMS
* Inquiry mail sending function (API side is implemented with AWS API Gateway + Lambda + SES)

### Software and services used
|Name|Description|
|-|-|
|React|UI|
|Gatsby|Static Site Generator|
|AWS(API, Lambda, SES)|問合せメール送信用API|
|Netlify|CI/CD|
|NetlifyCMS|CMS|

### Gatsby plugin
Gatsby provides plug-ins for functions frequently used on websites. By making good use of this, the design does not require reinventing the wheel. This time, the following plug-ins were used.

#### gatsby-plugin-glamor
Make the following css-in-js available.
```javascript
<div css={{
  marginHeight: '1rem',
  display: this.state.isVisible ? 'block' : 'none',
}}>
```

#### gatsby-plugin-react-helmet
Automatically perform server-side rendering of the contents described in react-helmet (SEO measures for crawlers that cannot render JS).

#### gatsby-plugin-feed
Automatically generate rss for blogs etc.

#### gatsby-plugin-google-analytics
Automatically install google analytics code.

#### gatsby-plugin-google-tagmanager
Automatically install code for google tag manager.

#### gatsby-plugin-sentry
Automatically install [Sentry](https://sentry.io/welcome/) (client-side error log management) code.

#### gatsby-plugin-sitemap
Automatically generate a sitemap.

#### gatsby-plugin-typography
Set global CSS beautifully.

#### gatsby-remark-prismjs
Decorate and display the code description part in the markdown file.
```javascript
const description = 'こんな感じです。';
console.log('多くの言語に対応してます。');
```

#### gatsby-remark-images
Automatically optimizes images such as detecting images in markdown files and automatically generating images with different resolutions.
```jsx
<img
  src="/static/20180409-cc8c83772885665d168373b6dc1c9bf7-2f183.png"
  srcset="
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-67829.png 125w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-5c59f.png 250w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-2f183.png 500w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-c93e8.png 750w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-4e628.png 1000w,
    /static/20180409-cc8c83772885665d168373b6dc1c9bf7-9260f.png 1463w"
 sizes="(max-width: 500px) 100vw, 500px"
/>
```

#### gatsby-remark-relative-images
The above gatsby-remark-images will not work unless the image link is a relative path. Images uploaded by NetlifyCMS will always be absolute paths, so images will not be optimized. To solve this problem, rewrite the absolute path to a relative path in advance using this plugin.

## Impression
- No cost
- Don't have to worry about server performance
- Everything is fast
- Designed for global use from the beginning


I think this method is suitable for document sites and corporate sites that do not require very complicated functions on the server side.

Best of all, git pushyou can place static files on CDNs all over the world , just be developer friendly. Plus, with the CMS in place like this, you can also update your content with a user-friendly GUI.

I think JAM Stack will increase its adoption in Japan in the future.

## reference
* [How to use Gatsby](https://www.gatsbyjs.org/tutorial/)
* [How to build a CI / CD environment with Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)
* [How to implement Netlify CMS on Gatsby](https://www.netlifycms.org/docs/add-to-your-site/)
* [An easy way to create an email submission form on a static site with AWS Lambda](https://blog.craftz.dog/aws-lambda%E3%81%A7%E9%9D%99%E7%9A%84%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%9C%E3%82%8B%E7%B0%A1%E5%8D%98%E3%81%AA%E6%96%B9%E6%B3%95-de8cba5e50a5)
