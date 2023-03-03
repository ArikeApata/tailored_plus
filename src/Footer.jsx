const Footer = () => {
  return (
    <div className="footer desktop">
      <div className="left">
        <p>
          Developed by<a href="https://github.com/ArikeApata">Arike Apata</a>
        </p>
        <img src="/images/logoo.png" alt="" className="logo mobile-footer" />
      </div>
      <img src="/images/logoo.png" alt="" className="logo desktop-footer" />
      <div className="right">
        <p>
          Fork this <a href="">here</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
