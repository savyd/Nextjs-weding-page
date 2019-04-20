export default function Header() {
  return (
    <header className="cover">
      <div className="hero-text-wrapper">
        <div className="hero-text">
          <div className="tagline">We're getting married!</div>
          <h1>Zoe &amp; Alex</h1>
          <span className="date">August 1, 2018</span>
        </div>
      </div>
      <style jsx>{`
        .cover {
          background: url("https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-cover.jpg")
            no-repeat 70% center/cover;
          display: table;
          text-align: center;
          height: 100vh;
          width: 100vw;
        }

        .hero-text-wrapper {
          display: table-cell;
          vertical-align: middle;
        }

        .hero-text {
          margin: 0 auto;
          padding: 0.625rem;
          color: hsla(0, 0%, 100%, 0.9);
          background: hsla(100, 0%, 0%, 0.5);
        }

        .hero-text h1 {
          font-size: 3.15rem;
          color: #d2ba87;
          margin-bottom: 0; /* To negate the effect of the single-direction margin declaration. */
        }

        .tagline {
          font-size: 1.25rem;
          letter-spacing: 0.15rem;
        }

        .tagline::after {
          display: block;
          content: "";
          background-color: #fff;
          height: 1px;
          width: 12.515625rem;
          margin: 0.5rem auto;
        }

        .date {
          font-size: 1.25rem;
          letter-spacing: 0.15rem;
          vertical-align: middle;
        }

        .date::before,
        .date::after {
          display: inline-block;
          content: "";
          background-color: #fff;
          height: 1px;
          width: 1.5rem;
          vertical-align: middle;
          margin: 0 0.5rem;
        }

        @media (min-width: 768px) {
          .cover {
            background: url("https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-cover.jpg")
              no-repeat center/cover;
          }
        }

        @media (min-width: 768px) {
          .hero-text {
            padding: 1.25rem;
            border-radius: 4px;
            width: 50%;
          }

          .hero-text h1 {
            font-size: 7rem;
          }
        }

        @media (min-width: 768px) {
          .tagline {
            text-transform: uppercase;
          }
        }
      `}</style>
    </header>
  );
}
