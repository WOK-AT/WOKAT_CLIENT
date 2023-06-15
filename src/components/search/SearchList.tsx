interface SearchListProps {
  item: React.ReactNode;
}

function SearchList(props: SearchListProps) {
  const { item } = props;

  return <>{item}</>;
}

export default SearchList;
