export default function MovieDetail({
  params: { id },
}: {
  params: { id: String };
}) {
  return (
    <div>
      <h1>Movie detail {id}</h1>
    </div>
  );
}
