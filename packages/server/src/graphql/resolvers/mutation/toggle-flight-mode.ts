import { IGraphQLContext } from '../../context';
import { IPlayer } from '../../../core/local-data/game-manager';

export const toggleFlightMode = (rootValue, { playerId, isFlying }, { games, game, player }: IGraphQLContext) => {
  if (!game || !player) {
    return null;
  }

  const flyingPlayer = ((game.controlledPlayersMap.get(playerId) || player) as IPlayer);
  let intervalId;
  if(isFlying)
  {
    this.intervalId =  setInterval(( ()=> flyingPlayer.flight.remainingTime-=1),1000);
  }
  else
  {
    clearInterval(this.intervalId);
  }
}

