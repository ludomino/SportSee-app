import "../sass/pages/_profil.scss";
import useFetch from "../services/useFetch";
import { useParams, Navigate } from "react-router-dom";

import ActivityChart from "../components/activityChart";
import ScoreChart from "../components/scoreChart";
import DailyChart from "../components/dailyChart";
import SessionChart from "../components/sessionChart";
import { LoaderInTo404 } from "../components/loader";
import CalorieDetails from "../components/caloryDetails";

function Profil() {
  const { id } = useParams();
  const { fetchedData, isError, isLoading } = useFetch("user", id);

  if (isError) return <Navigate to="/NotFound" />;

  return (
    <div className="container">
      {isLoading ? (
        <LoaderInTo404 />
      ) : (
        <>
          <div className="title">
            <h1>
              Bonjour <span>{fetchedData.userInfos.firstName}</span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier</h2>
          </div>
          <div className="div">
            <CalorieDetails keyData={fetchedData.keyData} />
            <div className="charts-wrapper">
              <DailyChart />
              <SessionChart />
              <ActivityChart />
              <ScoreChart score={fetchedData.score} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profil;
