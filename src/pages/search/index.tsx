import Layout from '@/components/common/Layout';
import { useInput } from '@/utils/hooks/useInput';
import search from '@/assets/icons/search.svg';
import reset from '@/assets/icons/delete.svg';
import Image from 'next/image';
import React, { useState } from 'react';

interface ResultType {
  line: string | string[];
  name: string;
}

function Search() {
  const { input, onChange } = useInput();
  const [result, setResult] = useState<ResultType[]>([]);
  const [recentSearch, setRecentSearch] = useState<ResultType[]>([]);

  return (
    <Layout>
      <div className="flex flex-col">
        <section className="flex">
          <input
            type="text"
            placeholder="지하철역을 검색하세요."
            value={input}
            onChange={onChange}
            className="mb-3.5 flex h-[52px] w-[303px] items-center  rounded-[38px] border border-solid
            border-BLUE_400 bg-white py-3.5 pl-6 font-system4 text-system4 text-GRAY_200 max-[340px]:h-[42px] max-[340px]:w-[250px]"
          />
          <div className="relative mr-[13px] h-6 w-6 ">
            {input.length ? (
              <Image src={reset} alt="reset" fill />
            ) : (
              <Image src={search} alt="search" fill />
            )}
          </div>
        </section>

        <section>
          {input.length ? (
            <>
              <nav>
                <h1>검색 결과</h1>
                <span>전체삭제</span>
              </nav>
              <ul>
                {result.map(({ line, name }) => (
                  <li>
                    <div>{line}</div>
                    {name}
                    {/* recentSearch가 includes 하고 있다면 표시 <div></div> */}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <nav>
                <h1>최근 검색</h1>
                <span>전체삭제</span>
              </nav>
              <ul>
                {recentSearch.map(({ line, name }) => (
                  <li>
                    <div>{line}</div>
                    {name}
                    {/* X버튼 <div></div> */}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>
    </Layout>
  );
}

export default Search;
