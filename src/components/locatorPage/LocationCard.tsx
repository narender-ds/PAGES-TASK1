import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
import phonePin from "..//../images/phone.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";
// import { GetDirection } from "../commons/GetDirection";
import GetDirection from "..//../components/commons/GetDirection";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);
  console.log('first===>', result.rawData)

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  return (
    <div className={`location result`} id={`result-${result.index}`}>
      <h3 className=""> <a href={result.rawData.slug}>{result.rawData.name}</a> 
      </h3>
      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      <Address address={address} />
      <GetDirection latitude={result?.rawData?.yextDisplayCoordinate?.latitude} longitude={result?.rawData?.yextDisplayCoordinate?.longitude}/>
    </div >
  );
}

export default LocationCard;