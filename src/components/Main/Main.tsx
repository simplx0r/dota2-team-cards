import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { State } from "../../store/store";
import { fetchTeamList } from "../../store/thunks/fetchPlayer";
import Teams from "../Teams";

const Main = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state: State) => state.team.teamList);

  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchTeamList());
        }}
      >
        fetch teams list
      </button>
      <Teams data={teams}></Teams>
    </>
  );
};

export default Main;
