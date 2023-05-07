import React, { useState, useEffect, useRef } from 'react';

const DETAIL_NAVIGATOR = [
  { index: 0, name: '공간 소개' },
  { index: 1, name: '운영 시간' },
  { index: 2, name: '시설 정보' },
  { index: 3, name: '공간 위치' },
];

function DetailNavigator({ scrollRef }) {
  return (
    <nav className="flex flex-row items-center justify-between">
      {DETAIL_NAVIGATOR.map(({ index, name }) => (
        <button
          key={index}
          type="button"
          className="font-system4_bold text-system4_bold text-GRAY_300 active:text-BLUE_600 "
        >
          {name}
        </button>
      ))}
      <div className="w-3 text-GRAY_300 active:text-BLUE_600 "></div>
    </nav>
  );
}

export default DetailNavigator;
