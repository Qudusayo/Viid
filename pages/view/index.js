import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { FiLink2 } from "react-icons/fi";

import styles from "./../../styles/View..module.scss";
import ShareIcon from "../../components/ShareIcon/ShareIcon";

import { HiOutlineCode } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbDownload } from "react-icons/tb";
import { TiArrowForwardOutline } from "react-icons/ti";
import {
  RiTwitterFill,
  RiFacebookCircleFill,
  RiLinkedinBoxFill,
  RiChat1Line,
} from "react-icons/ri";

function View() {
  return (
    <div className={styles.View}>
      <VideoPlayer
        ipfsHash={"QmcNFx6idgAqmV49so4YLdmgjaLMXERpTg43hZLcoWtQEs"}
      />
      <div className={styles.Modal}>
        <div className={styles.ViewModal}>
          <span className={styles.ViewModalCheckMark}>
            <IoCheckmarkCircleOutline size={60} stroke="#ffffff" />
          </span>
          <h2>Your video is Ready!</h2>
          <div className={styles.ViewModalShares}>
            <ShareIcon name={"Embed"}>
              <HiOutlineCode size={25} />
            </ShareIcon>
            <ShareIcon name={"Twitter"}>
              <RiTwitterFill size={25} fill="#1DA1F2" />
            </ShareIcon>
            <ShareIcon name={"Facebook"}>
              <RiFacebookCircleFill size={25} fill="#4267B2" />
            </ShareIcon>
            <ShareIcon name={"LinkedIn"}>
              <RiLinkedinBoxFill size={25} fill="#0077b5" />
            </ShareIcon>
            <ShareIcon name={"Email"}>
              <MdEmail size={25} fill="#EF4444" />
            </ShareIcon>
          </div>
          <button>
            <span>Copy Link</span>
            <span>
              <FiLink2 rotate={45} stroke="#0098fd" />
            </span>
          </button>
        </div>
        <div className={styles.ModalControls}>
          <div>
            <TiArrowForwardOutline size={30} />
          </div>
          <div>
            <TbDownload size={30} />
          </div>
          <div>
            <RiChat1Line size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
