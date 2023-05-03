import React from 'react';

interface ResultProps {
  data: { line: string; name: string }[];
}

function Result(props: ResultProps) {
  const { data } = props;

  return (
    <>
      <nav>
        <h1>검색 결과</h1>
        <span>전체삭제</span>
      </nav>
      <ul>
        {data.map(({ line, name }) => (
          <li>
            <div>{line}</div>
            {name}
            {/* recentSearch가 includes 하고 있다면 표시 <div></div> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Result;
