import Head from 'next/head'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import moment from 'moment';

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div id="wrapper">
      <Head>
        <title>Alex's App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="wrapper">
        {/* Header */}
        <header id="header" className="alt">
          <a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>
        {/* Menu */}
        <nav id="menu">
          <ul className="links">
            <li><a href="index.html">Home</a></li>
            <li><a href="landing.html">Landing</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
          <ul className="actions stacked">
            <li><a href="#" className="button primary fit">Get Started</a></li>
            <li><a href="#" className="button fit">Log In</a></li>
          </ul>
        </nav>
        {/* Banner */}
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Hi, my name is Forty</h1>
            </header>
            <div className="content">
              <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
              <ul className="actions">
                <li><a href="#one" className="button next scrolly">Get Started</a></li>
              </ul>
            </div>
          </div>
        </section>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one" className="tiles">
            {/* Loop over posts */}
            {posts.map((post) => {
              return (
                <article>
                  <span className="image">
                    <img src={`assets/images/${post.featured_image}`} alt="" />
                  </span>
                  <header className="major">
                  <h3><a href={`${post.slug}`} className="link">{post.title}</a></h3>
                    <p>Ipsum dolor sit amet</p>
                  </header>
                </article>
              )
            })}
        
          </section>
          {/* Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
              <ul className="actions">
                <li><a href="landing.html" className="button next">Get Started</a></li>
              </ul>
            </div>
          </section>
        </div>
       
       </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const sortPosts = () => {
    const allPosts = fs.readdirSync('posts').map((filename) => {
      const file = fs.readFileSync(path.join('posts', filename)).toString();
  
      const postData = matter(file);
      return {
        content: postData.content,
        title: postData.data.title,
        featured_image: postData.data.featured_image,
        date: postData.data.date,
        slug: postData.data.slug
      }
    });
  
    return allPosts.sort((a, b) => new moment(a.date).format('YYYY-MM-DD HH:mm:ss') < new moment(b.date).format('YYYY-MM-DD HH:mm:ss'));  
  }
  console.log(sortPosts())

  return {
    props: {
      posts: sortPosts()
    }
  }
}
 
