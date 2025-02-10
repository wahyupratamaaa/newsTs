import React from 'react';

import { useRouter } from 'next/router';

const DetailNews = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <p>DetailNews</p>
      <p>detail : {query.newsid}</p>
    </div>
  );
};

export default DetailNews;
