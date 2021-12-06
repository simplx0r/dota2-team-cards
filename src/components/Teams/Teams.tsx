import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Teams as TeamsList } from "../../store/models/models";
import { wipeTeams } from "../../store/reducers/teamSlice";

import { State } from "../../store/store";
import TeamCard from "./TeamCard";

interface TeamsProps {
  data: TeamsList[];
}

function Teams(props: TeamsProps) {
  const { data } = props;
  const [teamsPerPage, setTeamsPerPage] = React.useState(4);
  const [page, setPage] = React.useState(1);
  const pages = new Array(Math.round(data.length / teamsPerPage)).map(
    (item, index) => index
  );
  const dispatch = useDispatch();
  const selectedTeams = useSelector((state: State) => state.team.selectedTeams);
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {data
          .slice(page * teamsPerPage, page * teamsPerPage + teamsPerPage)
          .map((item) => (
            <TeamCard key={item.team_id} data={item} />
          ))}
      </div>
      <div>
        Selected: {selectedTeams.length} items
        <button
          onClick={() => {
            dispatch(wipeTeams());
          }}
        >
          UNSELECT
        </button>
        <div>
          Paginator: current page {page} of {pages.length}
        </div>
        <button
          onClick={() => {
            setPage((prev) => (prev > 1 ? prev - 1 : prev));
          }}
        >
          {`<----`}
        </button>
        <button
          onClick={() => {
            setPage((prev) => (prev > pages.length ? prev : prev + 1));
          }}
        >
          {`--->`}
        </button>
        <select
          value={`${teamsPerPage}`}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setTeamsPerPage(+e.target.value)
          }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
    </>
  );
}

export default React.memo(Teams);
