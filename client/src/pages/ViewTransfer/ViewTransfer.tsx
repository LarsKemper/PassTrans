import React, { useState, useEffect } from "react";
import ConfirmationTransfer from "./states/ConfirmationTransfer";
import ViewPassword from "./states/ViewPassword";
import TransferBlocked from "./states/TransferBlocked";
import { useParams } from "react-router-dom";
import { getTransfer } from "../../api/transfer.api";
import { error } from "../../services/alert/alert.service";
import { useNavigate } from "react-router-dom";
import { TransferView } from "../../shared/types/Transfer.type";
import ViewTransferSkeleton from "./ViewTransferSkeleton";

function ViewTransfer() {
  // TODO: Get transfer information
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<boolean>(false);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [data, setData] = useState<TransferView>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadTransferData();
  }, [params]);

  // TODO: add Blocked attribute to Model
  // TODO: view Data
  // TODO: Skeleton
  // TODO: decrypt Password

  async function loadTransferData(): Promise<void> {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (loaded) {
      console.log("loaded");
      return;
    }

    return await getTransfer(params.accessId)
      .then((res) => {
        if (res.status === 202) {
          setData({
            id: res.data.data._id,
            accessId: res.data.data.accessId,
            creatorIP: res.data.data.creatorIP,
            visitorIP: res.data.data.visitorIP,
            password: res.data.data.password,
            expirationDate: res.data.data.expirationDate,
          });
          setLoaded(true);
        }
      })
      .catch((err) => {
        error(err);
        setLoaded(true);
      });
  }

  function viewPassword(): void {
    setState(true);
  }

  if (!loaded) {
    return <ViewTransferSkeleton />;
  } else {
    if (blocked) {
      return <TransferBlocked />;
    }
    if (state) {
      return <ViewPassword />;
    } else {
      return <ConfirmationTransfer viewPassword={viewPassword} />;
    }
  }
}

export default ViewTransfer;
