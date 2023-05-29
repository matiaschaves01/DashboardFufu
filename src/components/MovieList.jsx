function MovieList(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price || props.email }</td>
      <td>{props.createdAt}</td>
    </tr>
  );
}

export default MovieList;
