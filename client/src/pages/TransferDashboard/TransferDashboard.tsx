import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTransfer } from "../../api/transfer.api";
import { TransferView } from "../../shared/types/Transfer.type";
import { error } from "../../services/alert/alert.service";
import TransferDashboardView from "./states/TransferDashboardView";
import TransferDashbaordSkeleton from "./states/TransferDashbaordSkeleton";

function TransferDashboard() {
  const navigate = useNavigate();
  const params = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<TransferView>();

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
            status: res.data.data.status,
            creatorIP: res.data.data.creatorIP,
            visitorIP: res.data.data.visitorIP,
            password: res.data.data.password,
            expirationDate: res.data.data.expirationDate,
            isViewed: res.data.data.isViewed,
          });
        }
        setLoaded(true);
      })
      .catch((err) => {
        error(err.response.data.message);
        navigate("/404");
      });
  }

  if (!loaded || !data) {
    return <TransferDashbaordSkeleton />;
  } else {
    return <TransferDashboardView transfer={data} />;
  }
}

export default TransferDashboard;
