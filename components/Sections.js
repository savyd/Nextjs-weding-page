function Location() {
  const data = [
    {
      title: "Ceremony",
      image:
        "https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-ceremony.png",
      person: "St. Nicholas Church",
      tag: "2 Trinity Square, Budapest"
    },
    {
      title: "Photos",
      image:
        "https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-photoshoot.png",
      person: "Liberty Bastion",
      tag: "23 Wisdom Road, Budapest"
    },
    {
      title: "Party",
      image:
        "https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-party.png",
      person: "Heaven Louge",
      tag: "14 Fairy Street, Budapest"
    }
  ];
  return (
    <section>
      <h2>Locations</h2>
      {data.map(d => (
        <div key={d.title}>
          <h3>{d.title}</h3>
          <img src={d.image} alt={d.title} />
          <p>{d.person}</p>
          <p>{d.tag}</p>
        </div>
      ))}
      <style jsx>{`
        div {
          display: inline-block;
        }
        div img {
          height: 7.5rem;
        }

        div h3 {
          font-weight: 700;
        }

        div p {
          font-family: "Muli", sans-serif;
        }

        div::after {
          content: "";
          display: block;
          height: 0.1875rem;
          width: 25vw;
          margin: 1.5rem auto;
          background-color: #444349;
        }
        @media (min-width: 768px) {
          div {
            display: inline-block;
            width: 30%;
            padding: 1.5rem;
            margin: 0.5rem;
          }

          div::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

function Program() {
  return (
    <section>
      <h2>Program</h2>
      <div>
        <p>"It's going to be somehow, that's for sure."</p>
        <ul>
          <li>13:45 – Wedding ceremony</li>
          <li>14:30 – Photos</li>
          <li>16:00 – Cocktails</li>
          <li>18:00 – Dinner</li>
          <li>22:00 – Cake</li>
          <li>... - 4:00 – Dance until dawn</li>
        </ul>
      </div>
      <style jsx>{`
        section {
          width: 100vw;
          text-align: left;
          background: hsla(100, 0%, 0%, 0.6);
          color: #d2ba87;
          font-family: "Muli", sans-serif;
        }

        section h2 {
          font-family: "Great Vibes", cursive;
          margin-top: 1rem; /* To account for the unequal margins compared to the previous section. */
          text-align: center;
        }

        section p {
          font-style: italic;
        }

        section ul {
          letter-spacing: 0.025rem;
        }

        @media (min-width: 768px) {
          div {
            width: 30vw;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

function Gifts() {
  return (
    <section>
      <h2>Gifts</h2>
      <p>The greatest gift for us is to have you there.</p>
      <img
        src="https://orange.codeberryschool.com/content/images/project-assets/wedding-landing-gifts.png"
        alt="Gifts"
      />
      <p>Please, just bring yourself and have fun with us.</p>
      <style jsx>{`
        section img {
          height: 7.5rem;
        }

        section p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
}

function Faq() {
  const data = [
    {
      title: "Travel and accomodations",
      q1: "Will there be some kind of organized transfer?",
      q2: "Where can I park?",
      q3: "How can I get home at night?",
      a1: "No, we'll just meet at the church at 13:15.",
      a2:
        "Parking is free on the weekends in the 1st district. The locations are close to each other so you won't need your car",
      a3:
        "The 916 bus is in service all night at the castle and it hits every major traffic hub in the city."
    },
    {
      title: "Food and festivities",
      q1:
        "I'd like to do some kind of surprise for you guys at the party. To whom should I talk about this?",
      q2: "What should I wear? Do you have a dress code?",
      q3:
        "I would like some kind of special food (gluten-free, lactose-free, vegan etc.)",
      a1:
        "Discuss it with Abigail Smith. Just drop her an email at abigail@awesomemail.com.",
      a2:
        "Wear what's comfortable to you. If it helps smart casual / business casual for the ladies and smart casual / informal for the gentlemen are perfect options.",
      a3: "Drop us a line zoeandalex@awesomemail.com and we'll find a way."
    },
    {
      title: "Other small stuff",
      q1:
        " I have a problem / question on the wedding day. With whom can I speak?",
      q2: "Can we bring kids?",
      q3: "How do you feel about dogs? Can I bring mine?",
      a1: "Jared Wright on this number +36 30 000 0000",
      a2: "Sure! We planned a whole toy / sweets corner for them.",
      a3:
        "We love dogs and you can absolutely bring yours. The Heaven Lounge is a dog-friendly place."
    }
  ];
  return (
    <section>
      <h2>Questions & Answers</h2>
      {data.map(d => (
        <div key={d.title}>
          <h3>{d.title}</h3>
          <p className="question">{d.q1}</p>
          <p className="answer">{d.a1}</p>
          <p className="question">{d.q2}</p>
          <p className="answer">{d.a2}</p>
          <p className="question">{d.q3}</p>
          <p className="answer">{d.a3}</p>
        </div>
      ))}
      <style jsx>{`
        section {
          background: hsla(100, 0%, 0%, 0.6);
          color: #d2ba87;
          width: 100vw;
          text-align: center;
        }

        h2 {
          margin-top: 1rem; /* To even out top and bottom margins. */
        }

        p {
          font-family: "Muli", sans-serif;
          text-align: left;
        }

        .div::after {
          content: "";
          display: block;
          height: 0.1875rem;
          width: 50vw;
          margin: 1.5rem auto;
          background-color: #d2ba87;
        }

        .question {
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .answer {
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          div {
            display: inline-block;
            width: 30%;
            vertical-align: top;
            padding: 1.5rem;
            margin: 0.5rem;
          }

          div::after {
            display: none;
          }

          div h3 {
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>If you have any questions feel free to call / write us.</p>
      <p>Phone: +36 30 000 0000 (Zoe) / +36 30 000 0000 (Alex)</p>
      <p>Email: zoeandalex@awesomemail.com</p>
      <style jsx>{`
        section {
          text-align: center;
        }
      `}</style>
    </section>
  );
}

// DEFAULT EXPORT MAIN
export default function Main() {
  return (
    <main>
      <Location />
      <Program />
      <Gifts />
      <Faq />
      <Contact />
    </main>
  );
}
