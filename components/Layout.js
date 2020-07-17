import Head from 'next/head'

export default function Layout(props) {
  return (
    <div id="wrapper">
      <Head>
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
        {/* This is where the content area goes */}
        {props.children}
        {/* Contact */}
        <section id="contact">
          <div className="inner">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={6} defaultValue={""} />
                  </div>
                </div>
                <ul className="actions">
                  <li><input type="submit" defaultValue="Send Message" className="primary" /></li>
                  <li><input type="reset" defaultValue="Clear" /></li>
                </ul>
              </form>
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-envelope" />
                  <h3>Email</h3>
                  <a href="#">information@untitled.tld</a>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-phone" />
                  <h3>Phone</h3>
                  <span>(000) 000-0000 x12387</span>
                </div>
              </section>
              <section>
                <div className="contact-method">
                  <span className="icon solid alt fa-home" />
                  <h3>Address</h3>
                  <span>1234 Somewhere Road #5432<br />
                    Nashville, TN 00000<br />
                    United States of America</span>
                </div>
              </section>
            </section>
          </div>
        </section>
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
              <li>© Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}
 