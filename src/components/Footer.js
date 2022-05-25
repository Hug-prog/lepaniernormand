import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="h-auto w-full static bottom-0 bg-main text-white 2xl:text-xl py-2 mt-5">
      <div className=" sm:grid sm:grid-cols-4 sm:grid-rows-1 sm:items-center sm:place-items-center mt-8 ml-5">
        <div>
          <h1 className="mb-2 font-bold">Le Panier Normand</h1>
          <div className="w-4/5 h-1 border border-white"></div>
          <p className="my-5">suivre Le Panier Normand</p>
          <div className="grid grid-cols-4 grid-rows-1 2xl:text-2xl w-2/4 sm:w-full ">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3 mt-5 sm:mt-0">Service Clients</h1>
          <p>centre d'aide</p>
          <p>FAQ</p>
          <p>retour d'information</p>
        </div>
        <div>
          <h1 className="font-bold mb-3  mt-5 sm:mt-0">Information</h1>
          <p>
            Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là,
            mais la majeure partie d'entre elles a été altérée par l'addition
          </p>
        </div>
        <div>
          <h1 className="font-bold mb-2">mode de paiement</h1>
          <div className="grid grid-cols-3 grid-rows-1 text-3xl 2xl:text-4xl  w-2/4 sm:w-full ">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>
      </div>
      <div className="h-1 w-5/6 border border-white m-auto mt-5"></div>
      <div className="text-center mt-5">
        <p>&copy; 2022 LePanierNormand.com</p>
      </div>
    </div>
  );
}
