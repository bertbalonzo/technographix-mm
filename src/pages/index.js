import { useState, useEffect } from 'react';
import Head from 'next/head';
import Search from '../components/Search';
import Results from '../components/Results';
import fs from 'fs';
import path from 'path';

export default function Home({ companiesData }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(companiesData);
  }, []);

  // Rest of the component

  return (
    <div className="container mx-auto p-4 text-black">
      <Head>
        <title>Company Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Search Companies</h1>
        <Search companies={companiesData} setResults={setResults} />
        <Results results={results} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'companies.json');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');
  const companiesData = JSON.parse(fileContent);

  return {
    props: {
      companiesData,
    },
  };
}