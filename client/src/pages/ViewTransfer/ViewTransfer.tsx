import React, { useState, useEffect } from "react";
import ConfirmationTransfer from "./states/ConfirmationTransfer";
import ViewPassword from "./states/ViewPassword";
import TransferBlocked from "./states/TransferBlocked";
import { useParams } from "react-router-dom";
import { getTransfer, setTransferViewed } from "../../api/transfer.api";
import { error } from "../../services/alert/alert.service";
import { useNavigate } from "react-router-dom";
import { TransferView } from "../../shared/types/Transfer.type";
import ViewTransferSkeleton from "./states/ViewTransferSkeleton";

function ViewTransfer() {
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<boolean>(false);
  const [blocked, setBlocked] = useState<boolean>(false);
  const [data, setData] = useState<TransferView>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadTransferData();
  }, [params]);

  async function loadTransferData(): Promise<void> {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (loaded) {
      return;
    }

    return await getTransfer(params.accessId)
      .then((res) => {
        if (res.status === 202) {
          setData({
            id: res.data.data.id,
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
        error(err.response.data.message);
        setBlocked(true);
        setLoaded(true);
      });
  }

  async function viewedTransfer() {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (!loaded) {
      return;
    }

    return await setTransferViewed(params.accessId).catch((err) => {
      error(err.response.data.message);
      setBlocked(true);
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
      return <ViewPassword data={data} />;
    } else {
      return (
        <ConfirmationTransfer
          viewedTransfer={viewedTransfer}
          viewPassword={viewPassword}
        />
      );
    }
  }
}

export default ViewTransfer;
