import "./footerSection.scss";

const FooterSection = () => {
  return (
    <section className="footerSection" id="homepage-footer">
      <hr />
      <h2>AKOD SCAFFOLDING</h2>
      <p>
        © {new Date().getFullYear()} OrderWorder, Inc. All rights reserved.
      </p>
    </section>
  );
};

export default FooterSection;
