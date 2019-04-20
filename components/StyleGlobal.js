export default function StyleGlobal() {
  return (
    <React.Fragment>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }

        h1,
        h2,
        h3,
        ul,
        ol,
        p,
        img {
          margin-bottom: 1.5rem;
        }

        section {
          width: 95%;
          margin: 1.5rem auto;
          padding: 0.5rem 1rem;
          text-align: center;
        }

        body {
          background: url("https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-background.png")
            repeat center;
          font-family: "Libre Baskerville", serif;
          font-size: 1.125rem;
          line-height: 1.5;
          color: #444349;
        }

        h1,
        h2 {
          font-family: "Great Vibes", cursive;
        }

        h2 {
          font-size: 3rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      `}</style>
    </React.Fragment>
  );
}
