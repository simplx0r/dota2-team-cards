import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Players, Teams } from "../models/models";

export const fetchTeamList = createAsyncThunk("fetchPlayerList", () =>
  axios
    .get<Teams[]>(`https://api.opendota.com/api/teams/`)
    .then((response) => response.data as Teams[])
    .catch((error) => error)
);
export const fetchTeamPlayers = createAsyncThunk<any, number, {}>(
  "fetchTeamPlayers",
  (teamId: number) =>
    axios
      .get<Players[]>(`https://api.opendota.com/api/teams/${teamId}/players`)
      .then((response) => response.data)
      .catch((error) => error)
);
