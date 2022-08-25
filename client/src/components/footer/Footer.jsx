import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Regions</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Cities</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Districts</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Airports</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Hotel-Booking</div>
    </div>
  );
};

export default Footer;
