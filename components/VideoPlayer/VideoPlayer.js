import React, { useEffect } from "react";
import { Player } from "@livepeer/react";
import { parseArweaveTxId, parseCid } from "livepeer/media";

import { useMemo, useState } from "react";
import styles from "./VideoPlayer.module.scss";

function VideoPlayer({ ipfsHash }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl("ipfs://" + ipfsHash);
  }, []);

  const idParsed = useMemo(() => parseCid(url) ?? parseArweaveTxId(url), [url]);

  return (
    <div>
      <div className={styles.VideoPlayer}>
        {idParsed && (
          <Player
            title={idParsed.id}
            src={url}
            autoPlay
            muted
            autoUrlUpload={{ fallback: true, ipfsGateway: "https://w3s.link" }}
          />
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;
