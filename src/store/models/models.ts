export type Teams = {
  name: string;
  tag: string;
  team_id: number;
  rating: number;
  wins: number;
  losses: number;
  players: Players[];
};

export interface Players extends Record<string, string | number> {}
