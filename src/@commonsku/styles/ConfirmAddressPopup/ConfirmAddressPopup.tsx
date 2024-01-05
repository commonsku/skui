import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import Popup from "../Popup";
import { ConfirmAddressContent } from "./ConfirmAddressContent";
import { ConfirmAddressPopupProps, } from "./types";

const ConfirmAddressPopup = ({
  apiKey,
  address,
  mapElementId,
  templateColor,
  onClose,
  onSelect,
}: ConfirmAddressPopupProps) =>  (
  <Wrapper apiKey={apiKey} libraries={['core', 'maps', 'places', 'geocoding']}>
    <Popup noHeader
      onClose={onClose}
      className="popup confirm-address-popup"
      style={{ width: 550, height: 750, background: 'var(--color-neutrals-30)' }}
    >
      <ConfirmAddressContent
        address={address}
        mapElementId={mapElementId}
        templateColor={templateColor}
        onClose={onClose}
        onSelect={onSelect}
      />
    </Popup>
  </Wrapper>
);

export default ConfirmAddressPopup;
