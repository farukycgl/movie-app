import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import SeriesCard from "./seriesCard";
import LoadingError from "../LoadingError";
import { getSeriesList } from "../../redux/slices/seriesSlice";

const SeriesList = () => {
  const { series, status, error } = useSelector((store) => store.seriesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeriesList()).then((res) => {
      console.log("res", res);
    });
  }, [dispatch]);

  return (
    <div className="pt-20 pb-10 px-20">
      <div className="pl-10">
        <h1 className="pb-5 text-2xl sm:text-3xl md:text-5xl text-[#382039]">
          Series
        </h1>
      </div>
      <div>
        <ul
          className={`grid gap-5 ${
            status === "rejected"
              ? "grid-cols-1"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {status === "pending" ? (
            <Loading />
          ) : status === "fulfilled" ? (
            series &&
            series.map((serie) => (
              <li key={serie.id}>
                <SeriesCard serie={serie} />
              </li>
            ))
          ) : status === "rejected" ? (
            <LoadingError />
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default SeriesList;
