import React from "react";
import { IArtist } from "./artistModal/types";
import { formatEventDate } from "../../shared/artHelpers";

interface ArtCreditsProps {
  setArtistForModalModal: any;
  arEnhanced: boolean | null | undefined;
  audioArtist: IArtist | null | undefined;
  visualArtist: IArtist | null | undefined;
}

const ArtCredits = (props: ArtCreditsProps) => {
  const { setArtistForModalModal, arEnhanced, audioArtist, visualArtist } = props;
  return (
    <>
      {/* Main Credit  */}
      <dl className="artist-credit d-flex align-items-center justify-content-between px-2 px-xxl-3 py-2 mb-4 py-xl-3">
        <dt className="fw-400">Artist</dt>
        <dd className="mb-0">
          <button className="nav-link btn-link bg-transparent border-0 p-0 d-flex align-items-center" onClick={() => setArtistForModalModal(visualArtist)}>
            <span className="h4 mb-0">{visualArtist?.name}</span>
          </button>
        </dd>
      </dl>

      {/* Stats  */}
      <div className="mb-5">

        {/* Main  */}
        <dl className="art-stat art-stat-main d-flex align-items-center justify-content-between py-2 mb-4 px-2 px-xxl-3">
          <dt className="small fw-400 font-aeonik text-light-70 text-uppercase">
            BTC On this day
          </dt>
          <dd className="small fw-400 font-aeonik text-light-70 text-uppercase mb-0">
            MAY 24, 2020
          </dd>
        </dl>

        {/* Sub  */}
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Circulating Supply
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            19,151,786
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Market Cap
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            $462,000,000,000.00
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Number of Addresses
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            44,000,000
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Block Number
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            777,970
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Block Size
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            266,764,402
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Hash Rate
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0">
            273 MH/s
          </dd>
        </dl>

        {/* Subs With Graphs and Dynamic Text Color */}
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Price Change (1M)
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0 text-green d-flex align-items-center">
            <svg width="55" height="20" viewBox="0 0 55 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
              <path d="M0.636597 18.6347L2.13633 13.3248V15.6097L4.9522 9.89754L5.47387 11.4835L5.74704 10.3115L6.12948 11.0595L7.79583 9.13944L8.15096 10.6356L9.38024 7.79285L9.79 8.49106L9.98122 7.99234L10.309 8.49106L11.1832 5.64831L11.4837 6.17198L12.4124 4.7506L12.631 6.92006L13.6144 5.64831L14.1334 7.56841L14.9256 3.32921H16.4056V15.6097L18.9959 10.3115L19.7881 7.99234L20.6076 10.3115L22.1374 6.92006L23.394 10.486L25.7706 2.33174L26.5081 4.37655L27.3277 2.10731L27.5462 3.57857L28.5296 1.33428L30.1413 11.4835L33.0916 5.97247L34.075 8.66561L35.6867 5.32412L36.0145 7.09461L36.9706 5.14957L38.3911 9.89754L38.6643 8.8651L39.0741 9.76282L39.4565 7.79285L39.6751 8.66561L40.0848 6.77044L40.3034 7.79285L40.4946 7.09461L40.7404 7.79285L41.8604 3.57857L44.3736 7.99234L47.1327 2.75567L50.3561 12.1567L52.8693 4.37655L53.1698 5.32412L53.5249 4.17705L54.1532 6.17198L54.5761 0.835266" stroke="#97DC6F" stroke-width="0.5" />
            </svg>
            5%
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Price Change (3M)
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0 text-green d-flex align-items-center">
            <svg width="55" height="20" viewBox="0 0 55 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
              <path d="M0.636597 18.6347L2.13633 13.3248V15.6097L4.9522 9.89754L5.47387 11.4835L5.74704 10.3115L6.12948 11.0595L7.79583 9.13944L8.15096 10.6356L9.38024 7.79285L9.79 8.49106L9.98122 7.99234L10.309 8.49106L11.1832 5.64831L11.4837 6.17198L12.4124 4.7506L12.631 6.92006L13.6144 5.64831L14.1334 7.56841L14.9256 3.32921H16.4056V15.6097L18.9959 10.3115L19.7881 7.99234L20.6076 10.3115L22.1374 6.92006L23.394 10.486L25.7706 2.33174L26.5081 4.37655L27.3277 2.10731L27.5462 3.57857L28.5296 1.33428L30.1413 11.4835L33.0916 5.97247L34.075 8.66561L35.6867 5.32412L36.0145 7.09461L36.9706 5.14957L38.3911 9.89754L38.6643 8.8651L39.0741 9.76282L39.4565 7.79285L39.6751 8.66561L40.0848 6.77044L40.3034 7.79285L40.4946 7.09461L40.7404 7.79285L41.8604 3.57857L44.3736 7.99234L47.1327 2.75567L50.3561 12.1567L52.8693 4.37655L53.1698 5.32412L53.5249 4.17705L54.1532 6.17198L54.5761 0.835266" stroke="#97DC6F" stroke-width="0.5" />
            </svg>
            10%
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Price Change (1Y)
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0 text-red d-flex align-items-center">
            <svg width="55" height="20" viewBox="0 0 55 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
              <path d="M54.5761 0.835256L53.0764 5.85066L53.0764 3.69249L50.2605 9.0879L49.7389 7.58991L49.4657 8.69694L49.0833 7.99032L47.4169 9.80397L47.0618 8.39075L45.8325 11.0759L45.4227 10.4164L45.2315 10.8875L44.9037 10.4164L44.0296 13.1015L43.7291 12.6069L42.8003 13.9494L42.5818 11.9003L41.5983 13.1015L41.0793 11.2879L40.2871 15.292L38.8071 15.292L38.8071 3.69249L36.2168 8.69694L35.4246 10.8875L34.6051 8.69694L33.0754 11.9003L31.8188 8.53209L29.4422 16.2342L28.7046 14.3028L27.8851 16.4462L27.6665 15.0565L26.6831 17.1763L25.0714 7.58991L22.1211 12.7953L21.1377 10.2515L19.526 13.4077L19.1982 11.7354L18.2421 13.5726L16.8216 9.08789L16.5484 10.0631L16.1387 9.21515L15.7562 11.0759L15.5377 10.2515L15.1279 12.0416L14.9094 11.0759L14.7182 11.7354L14.4723 11.0759L13.3523 15.0565L10.8391 10.8875L8.08008 15.8338L4.85664 6.95399L2.34346 14.3028L2.04297 13.4077L1.68785 14.4912L1.05955 12.6069L0.636589 17.6477" stroke="#DA5F67" stroke-width="0.5" />
            </svg>
            28%
          </dd>
        </dl>
        <dl className="art-stat art-stat-sub d-flex align-items-center justify-content-between pb-2 mb-2 px-2 px-xxl-3">
          <dt className="small font-aeonik fw-400 text-light-100">
            Return Since Event
          </dt>
          <dd className="small font-aeonik fw-400 text-light-70 mb-0 text-green d-flex align-items-center">
            1100%
          </dd>
        </dl>



      </div>

    </>
  );
};

export default ArtCredits;
