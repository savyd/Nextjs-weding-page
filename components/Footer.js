export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          <small>
            Made with heart in Budapest ©2018 | Icons by Becris ( CC 3.0 B )
          </small>
        </p>
      </div>
      <style jsx>{`
        footer {
          height: 10vh;
          width: 100vw;
          background-color: #606060;
          color: #fff;
          font-family: "Muli", sans-serif;
          display: table;
          text-align: center;
          font-size: 0.875rem;
        }

        div {
          display: table-cell;
          vertical-align: middle;
          padding: 0.5rem 1rem;
        }

        p {
          margin-bottom: 0;
        }

        small {
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          footer {
            min-height: 7vh;
          }
        }
      `}</style>
    </footer>
  );
}
