import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Teams } from "../../store/models/models";

import { removeTeam, selectTeams } from "../../store/reducers/teamSlice";

import { State } from "../../store/store";
import { fetchTeamPlayers } from "../../store/thunks/fetchPlayer";

interface PlayerCardProps {
  data: Teams;
}

function PlayerCard(props: PlayerCardProps) {
  const { data } = props;
  const selectedTeams = useSelector((state: State) => state.team.selectedTeams);

  const teams = useSelector((state: State) => state.team.selectedTeams);
  const dispatch = useDispatch();
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          border: "1px dashed black",
        }}
      >
        {teams.includes(data.team_id) && (
          <button
            onClick={() => {
              dispatch(removeTeam(data.team_id));

              dispatch(selectTeams(data.team_id));
            }}
          >
            {`X`}
          </button>
        )}
        <input
          type="checkbox"
          checked={selectedTeams.includes(data.team_id)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(selectTeams(data.team_id));
          }}
        />
        <span>Name: {data.tag}</span>
        <span>Wins: {data.wins}</span>
        <span>Losses: {data.losses}</span>
        <span>Rating: {data.rating}</span>
        <button
          onClick={() => {
            dispatch(fetchTeamPlayers(data.team_id));
          }}
        >
          Expand
        </button>
        {data.players ? (
          <ul>
            {data.players.map((item, index) => (
              <React.Fragment key={item.name}>
                <li>
                  {item.name}:
                  <div>
                    Win Rate:
                    {`${((+item.wins / +item.games_played) * 100).toFixed(2)}%`}
                  </div>
                </li>
              </React.Fragment>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}
export default React.memo(PlayerCard);
