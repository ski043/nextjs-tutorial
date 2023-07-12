import { Movie } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

async function getData(id: string) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: process.env.THEMOVIEDATABASE_API as string,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  return url.json();
}

export default async function MovieId({
  params,
  children,
}: {
  children: ReactNode;
  params: { id: string };
}) {
  const data: Movie = await getData(params.id);

  return (
    <div className="min-h-screen p-10">
      <div className="h-[40vh] relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="Image of movie"
          className="object-cover w-full rounded-lg"
          fill
        />
      </div>

      <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>

      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium ">
          <h1>
            <span className="underline">Homepage:</span>{" "}
            <Link href={data.homepage} target="_blank">
              Link
            </Link>
          </h1>

          <h1>
            <span className="underline">Original Lanugage:</span>{" "}
            {data.original_language}
          </h1>

          <p>
            <span className="underline">Overview:</span> {data.overview}
          </p>

          <p>
            <span className="underline">Release Date:</span> {data.release_date}
          </p>
        </div>
        <div className="w-1/2 ">{children}</div>
      </div>
    </div>
  );
}
