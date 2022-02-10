import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { error, info } from "../../services/alert/alert.service";
import TransferDashboardView from "./states/TransferDashboardView";
import TransferDashbaordSkeleton from "./states/TransferDashbaordSkeleton";
import {
  getDashboard,
  changeStatus,
  requestVerification,
} from "../../api/dashboard.api";
import { DashboardDto } from "../../shared/types/Dashboard.types";
import { TransferStatus } from "../../shared/enums/TransferStatus.enum";
import { loadState, saveState } from "../../services/localStorage.service";

function TransferDashboard() {
  const navigate = useNavigate();
  const params = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<DashboardDto>();

  useEffect(() => {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (loadState(params.accessId)) {
      loadTransferData();
    } else {
      requestDashboardVerification();
    }
  }, [params]);

  async function requestDashboardVerification(): Promise<void> {
    if (!params.accessId) {
      navigate("/404");
      return;
    }

    return await requestVerification(params.accessId)
      .then((res) => {
        navigate("/verify-dashboard");
        info(res.data.message);
        saveState(true, res.data.accessId);
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  }

  async function loadTransferData(): Promise<void> {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (loaded) {
      return;
    }

    return await getDashboard(params.accessId)
      .then((res) => {
        if (res.status === 202) {
          setData({
            id: res.data.data.id,
            accessId: res.data.data.accessId,
            status: res.data.data.status,
            creatorIP: res.data.data.creatorIP,
            visitorIP: res.data.data.visitorIP,
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            email: res.data.data.email,
            password: res.data.data.password,
            country: res.data.data.country,
            expirationDate: res.data.data.expirationDate,
            viewedDate: res.data.data.viewedDate,
          });
          setLoaded(true);
        } else if (res.status === 203) {
          navigate("/verify-dashboard");
          info(res.data.message);
        }
      })
      .catch((err) => {
        error(err.response.data.message);
        navigate("/404");
      });
  }

  async function changeTransferStatus(newStatus: string): Promise<void> {
    if (!params.accessId) {
      navigate("/404");
      return;
    }
    if (
      data?.status === TransferStatus.VIEWED ||
      data?.status === TransferStatus.EXPIRED ||
      data?.status === TransferStatus.PENDING_FOR_DELETION
    ) {
      error(
        "With the current status of your transfer it is no longer possible to change it!"
      );
      return;
    }

    return await changeStatus(params.accessId, newStatus)
      .then((res) => {
        if (res.status === 201) {
          setData({
            id: res.data.data.id,
            accessId: res.data.data.accessId,
            status: res.data.data.status,
            creatorIP: res.data.data.creatorIP,
            visitorIP: res.data.data.visitorIP,
            firstName: res.data.data.firstName,
            lastName: res.data.data.lastName,
            email: res.data.data.email,
            password: res.data.data.password,
            country: res.data.data.country,
            expirationDate: res.data.data.expirationDate,
            viewedDate: res.data.data.viewedDate,
          });
        }
      })
      .catch((err) => {
        error(err.response.data.message);
      });
  }

  if (!loaded || !data) {
    return <TransferDashbaordSkeleton />;
  } else {
    return (
      <TransferDashboardView
        changeTransferStatus={changeTransferStatus}
        transfer={data}
      />
    );
  }
}

export default TransferDashboard;
