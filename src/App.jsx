import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [openService, setOpenService] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Scroll reveal
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Back-to-top visibility
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function callBusiness() {
    window.location.href = "tel:9803370060";
  }

  function emailBusiness() {
    window.location.href =
      "mailto:gracefulagingcarellc@gmail.com";
  }

  function toggleService(service) {
    setOpenService((current) =>
      current === service ? null : service
    );
  }

  async function copyContact() {
    const contactInfo = `
Graceful Aging Care LLC
Charlotte, North Carolina
980-337-0060
230-417-0461
gracefulagingcarellc@gmail.com
`;

    try {
      await navigator.clipboard.writeText(contactInfo);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Could not copy contact information.", error);
    }
  }

  function printBrochure() {
    window.print();
  }

  async function shareBrochure() {
    const shareData = {
      title: "Graceful Aging Care LLC",
      text:
        "Compassionate non-medical home care in Charlotte, North Carolina.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.log("Sharing cancelled or unavailable.", error);
    }
  }

  return (
    <>
      <main className="Main-Con">
        <header className="TitleAndContactInfo">
          <div className="Title reveal">
            <span className="MainBusinessTitle">
              Graceful Aging Care LLC
            </span>

            <span className="TitleSubtitle">
              Licensed & Insured Nonmedical Home Care
            </span>
          </div>

          <aside className="Contact-Info reveal">
            <h2 className="City">
              Charlotte, North Carolina
            </h2>

            <ul className="Contact-List">
              <li className="List-Item">
                980-337-0060
              </li>

              <li className="List-Item">
                230-417-0461
              </li>

              <li className="List-Item">
                gracefulagingcarellc@gmail.com
              </li>
            </ul>

            <div className="ContactButtons">
              <button
                type="button"
                onClick={callBusiness}
                className="CallButton"
              >
                Call Us
              </button>

              <button
                type="button"
                onClick={emailBusiness}
                className="EmailButton"
              >
                Email Us
              </button>
            </div>
          </aside>
        </header>

        <div className="Overview-section">
          <section className="Overview reveal">
            <h2 className="SectionTitle">
              Who We Are
            </h2>

            <article className="OverViewArticle">
              <p>
                Graceful Aging Care LLC is a licensed and
                insured non-medical home care agency based
                in Charlotte, North Carolina, dedicated to
                providing compassionate, in-home care for
                individuals of all ages — with special
                attention to the elderly and people with
                disabilities.
              </p>

              <p>
                We understand that home is more than four
                walls — it is where love, memories, and
                life's most meaningful moments reside.
              </p>

              <p>
                Our mission is to preserve that sense of
                home by providing care built on compassion,
                honesty, and respect.
              </p>

              <p>
                At Graceful Aging Care LLC, every visit is
                guided by faith, empathy, and the belief
                that every person deserves to live with
                dignity, safety, and peace.
              </p>
            </article>
          </section>

          <section className="Mission reveal">
            <h2 className="SectionTitle">
              Our Mission
            </h2>

            <article className="MissionArticle">
              <p>
                Our mission is to provide loving,
                high-quality care that allows individuals
                to remain safe in their homes — surrounded
                by the warmth of family, faith, and
                familiarity.
              </p>

              <p>
                We strive to reduce the number of elderly
                and disabled individuals who feel forced
                to leave their homes for institutional care,
                ensuring they continue to experience
                independence, comfort, and respect.
              </p>

              <blockquote>
                “Whatever you do for the least of these,
                you do for Me.”
                <span> — Matthew 25:40</span>
              </blockquote>
            </article>
          </section>

          <section className="Vision-Section reveal">
            <h2 className="SectionTitle">
              Our Vision
            </h2>

            <article className="Vision-Article">
              <p>
                Our vision is to become a trusted name in
                compassionate home care throughout North
                Carolina and beyond, where every person,
                regardless of age or ability, is treated
                with kindness, dignity, and love.
              </p>
            </article>
          </section>

          <section className="Core-Values reveal">
            <h2 className="SectionTitle">
              Our Core Values
            </h2>

            <article className="CoreValues-Article">
              <ul className="CoreValuesList">
                <li>
                  <strong>Compassion:</strong>{" "}
                  Serving every client with empathy and
                  understanding.
                </li>

                <li>
                  <strong>Integrity:</strong>{" "}
                  Acting with honesty, transparency, and
                  accountability.
                </li>

                <li>
                  <strong>Respect:</strong>{" "}
                  Protecting the dignity and individuality
                  of every person.
                </li>

                <li>
                  <strong>Excellence:</strong>{" "}
                  Delivering care that exceeds expectations.
                </li>

                <li>
                  <strong>Faith:</strong>{" "}
                  Guided by Christian principles of love,
                  service, and humility.
                </li>
              </ul>
            </article>
          </section>

          <section className="StatsSection reveal">
            <article className="StatCard">
              <h3>Compassion</h3>

              <p>
                Personal care centered around dignity,
                patience, and respect.
              </p>
            </article>

            <article className="StatCard">
              <h3>Trust</h3>

              <p>
                Licensed, insured, dependable, and focused
                on client safety.
              </p>
            </article>

            <article className="StatCard">
              <h3>Comfort</h3>

              <p>
                Helping clients remain safely and
                comfortably at home.
              </p>
            </article>
          </section>

          <section className="ServicesSection reveal">
            <div className="ServicesHeading">
              <p className="SectionEyebrow">
                Compassionate Support
              </p>

              <h2>Our Services</h2>

              <p>
                Personalized support designed around each
                client's unique needs.
              </p>
            </div>

            <div className="Our-Services-Con">
              <article className="ServiceCard">
                <button
                  type="button"
                  className="ServiceHeader"
                  onClick={() =>
                    toggleService("personal")
                  }
                  aria-expanded={
                    openService === "personal"
                  }
                >
                  <span>Personal Care</span>

                  <span className="AccordionIcon">
                    {openService === "personal"
                      ? "−"
                      : "+"}
                  </span>
                </button>

                <div
                  className={`ServiceContent ${
                    openService === "personal"
                      ? "open"
                      : ""
                  }`}
                >
                  <ul>
                    <li>
                      Bathing, grooming, and dressing
                    </li>

                    <li>
                      Mobility and transfer assistance
                    </li>

                    <li>
                      Medication reminders
                    </li>

                    <li>
                      Meal preparation and feeding
                    </li>
                  </ul>
                </div>
              </article>

              <article className="ServiceCard">
                <button
                  type="button"
                  className="ServiceHeader"
                  onClick={() =>
                    toggleService("companionship")
                  }
                  aria-expanded={
                    openService === "companionship"
                  }
                >
                  <span>Companionship</span>

                  <span className="AccordionIcon">
                    {openService === "companionship"
                      ? "−"
                      : "+"}
                  </span>
                </button>

                <div
                  className={`ServiceContent ${
                    openService === "companionship"
                      ? "open"
                      : ""
                  }`}
                >
                  <ul>
                    <li>
                      Conversation, reading, and
                      recreational activities
                    </li>

                    <li>
                      Emotional support and companionship
                    </li>

                    <li>
                      Walks, games, and errands
                    </li>
                  </ul>
                </div>
              </article>

              <article className="ServiceCard">
                <button
                  type="button"
                  className="ServiceHeader"
                  onClick={() =>
                    toggleService("home")
                  }
                  aria-expanded={
                    openService === "home"
                  }
                >
                  <span>Home Support</span>

                  <span className="AccordionIcon">
                    {openService === "home"
                      ? "−"
                      : "+"}
                  </span>
                </button>

                <div
                  className={`ServiceContent ${
                    openService === "home"
                      ? "open"
                      : ""
                  }`}
                >
                  <ul>
                    <li>
                      Light housekeeping and laundry
                    </li>

                    <li>
                      Grocery shopping and meal planning
                    </li>

                    <li>
                      Appointment reminders
                    </li>
                  </ul>
                </div>
              </article>

              <article className="ServiceCard">
                <button
                  type="button"
                  className="ServiceHeader"
                  onClick={() =>
                    toggleService("specialized")
                  }
                  aria-expanded={
                    openService === "specialized"
                  }
                >
                  <span>Specialized Care</span>

                  <span className="AccordionIcon">
                    {openService === "specialized"
                      ? "−"
                      : "+"}
                  </span>
                </button>

                <div
                  className={`ServiceContent ${
                    openService === "specialized"
                      ? "open"
                      : ""
                  }`}
                >
                  <ul>
                    <li>
                      Alzheimer's and dementia support
                    </li>

                    <li>
                      Post-hospital or post-surgery
                      recovery
                    </li>

                    <li>
                      Respite care for family caregivers
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <section className="Why-Choose-use reveal">
            <h2 className="WhyTitle">
              Why Choose Graceful Aging Care?
            </h2>

            <aside className="whyChooseUs">
              <ul className="Reasos">
                <li className="ReasonItems">
                  Reliable, punctual, and compassionate
                  staff
                </li>

                <li className="ReasonItems">
                  Personalized, one-on-one care
                </li>

                <li className="ReasonItems">
                  Faith-based service with integrity
                </li>

                <li className="ReasonItems">
                  Clients are included in all care
                  decisions
                </li>

                <li className="ReasonItems">
                  Licensed, insured, and safety certified
                </li>
              </ul>
            </aside>
          </section>

          <section className="BrochureActions reveal">
            <button
              type="button"
              onClick={copyContact}
            >
              {copied
                ? "Copied!"
                : "Copy Contact"}
            </button>

            <button
              type="button"
              onClick={shareBrochure}
            >
              Share Brochure
            </button>

            <button
              type="button"
              onClick={printBrochure}
            >
              Print Brochure
            </button>
          </section>

          <footer className="FounderSection reveal">
            <p className="FounderEyebrow">
              Graceful Aging Care LLC
            </p>

            <h2>
              Our Founder & Director
            </h2>

            <div className="FounderText">
              <p>
                I was born and raised in Africa, in a
                culture that honors elderly people and
                values family. In my homeland, there are
                no nursing homes — we welcome our aging
                parents into our homes, believing that God
                blesses those who honor and care for their
                elders.
              </p>

              <p>
                My father's wisdom shaped my life:
                “Dee, life will be tough but always
                prioritize your education. Be a good
                person.”
              </p>

              <p>
                Despite war and hardship, I pursued my
                education — earning a Master's in Banking
                and Finance and a Bachelor of Science in
                Accounting. Later, I followed my heart into
                healthcare, becoming a licensed Adult Home
                Care Administrator, a Medication
                Technician (MedTech), and a Certified
                Nursing Assistant (CNA).
              </p>

              <p>
                Through my work, I saw how patients in
                institutions often lost their dignity and
                joy. I knew I couldn't change the whole
                system — but I could make a difference for
                one person at a time.
              </p>

              <p>
                That dream became Graceful Aging Care LLC
                — a mission built on faith, compassion,
                and service.
              </p>

              <p>
                Today, I am blessed with a supportive
                husband, two wonderful children, and the
                privilege to serve others through
                Christ-centered care.
              </p>

              <blockquote className="FounderQuote">
                “Let all that you do be done in love.”
                <span>
                  {" "}
                  — 1 Corinthians 16:14
                </span>
              </blockquote>
            </div>
          </footer>
        </div>
      </main>

      <div className="FloatingContact">
        <button
          type="button"
          onClick={callBusiness}
        >
          Call Graceful Aging Care
        </button>
      </div>

      {showTopButton && (
        <button
          type="button"
          className="BackToTop"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;