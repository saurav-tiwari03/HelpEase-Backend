exports.getClient = (filter) => {
  const query = [
    {$match:filter},
  ]
  return query;
}