import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { trpc } from '@/utils/trpc';
         
         
const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "Theo" }])
         
  if (isLoading) return <div>Loading...</div>

  if (data) return <div>{data.greeting}</div>
         
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is Rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-200" />
        <div className="p-8">Verses</div>
        <div className="w-16 h-16 bg-black" />
      </div>
    </div>
  )      
}        

export default Home
