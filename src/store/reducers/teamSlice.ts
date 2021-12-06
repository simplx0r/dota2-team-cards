import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Players, Teams } from "../models/models";
import { fetchTeamList, fetchTeamPlayers } from "../thunks/fetchPlayer";

const teamsInitialState = {
  teamList: [] as Teams[],
  selectedTeams: [] as number[],
  fetchTeamId: 0,
};
const teamSlice = createSlice({
  name: "teams",
  initialState: teamsInitialState,
  reducers: {
    addTeam: (state, action: PayloadAction<Teams>) => {
      return { ...state, teamList: state.teamList.concat(action.payload) };
    },

    removeTeam: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        teamList: state.teamList.filter(
          (item) => item.team_id !== action.payload
        ),
      };
    },
    wipeTeams: (state) => {
      state.selectedTeams = [];
    },
    selectTeams: (state, action: PayloadAction<number>) => {
      if (state.selectedTeams.includes(action.payload)) {
        return {
          ...state,
          selectedTeams: state.selectedTeams.filter(
            (item) => item !== action.payload
          ),
        };
      } else {
        return {
          ...state,
          selectedTeams: state.selectedTeams.concat(action.payload),
        };
      }
    },
  },
  extraReducers: {
    [fetchTeamList.fulfilled.type]: (state, action: PayloadAction<Teams[]>) => {
      if (state.teamList.length === 0)
        state.teamList = [...state.teamList, ...action.payload];
    },

    [fetchTeamPlayers.fulfilled.type]: (state, action: any) => {
  
        state.teamList =  state.teamList.map((item, index) =>
          item.team_id === action.meta.arg
            ? {
                ...item,
                players: action.payload.filter((item: Players) =>
                  Boolean(item.is_current_team_member)
                ),
              }
            : item
        ),                       
});
const { actions, reducer } = teamSlice;
export const { addTeam, removeTeam, selectTeams, wipeTeams } = actions;
export default reducer;
