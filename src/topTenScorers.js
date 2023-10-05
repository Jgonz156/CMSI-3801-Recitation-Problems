export function topTenScorers(data) {
  return Object.entries(data)
    .flatMap(([team, playerList]) =>
      playerList.map((player) => [...player, team])
    )
    .filter(([, games, ,]) => games >= 15)
    .map(([name, games, points, team]) => ({ name, ppg: points / games, team }))
    .sort((p1, p2) => p2.ppg - p1.ppg)
    .slice(0, 10)
}

export default topTenScorers
