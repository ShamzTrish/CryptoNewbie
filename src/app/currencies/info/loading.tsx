import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const styles = {
  title: `text-gray-400 whitespace-nowrap mr-2`,
}

interface loadingProps {

}

const loading: FC<loadingProps> = ({ }) => {

  return <>
    <main className='px-5 mt-10 '>
      <div className='flex max-w-screen-2xl m-auto pt-10 flex-col justify-between md:flex-row'>
        <div className='flex flex-col'>
          <SkeletonTheme baseColor="#172436" highlightColor="#22344d">

            <div className='flex items-center mr-[4.5rem]'>
              <Skeleton className='mr-3' height={50} width={80} />

              <div>
                <div className='flex'>
                  <Skeleton height={50} width={80} />

                  &nbsp; &nbsp;
                  <Skeleton height={50} width={80} />

                </div>
              </div>
            </div>
          </SkeletonTheme>
        </div>


        <div className='mt-3 md:mt-0'>
          <div className='w-full flex items-start justify-between'>
            <div>
              <div className='flex items-start pb-1'>
                <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                  <Skeleton height={50} width={80} />
                </SkeletonTheme>
              </div>
              <div className='flex items-start'>
                <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                  <Skeleton className='mr-3' height={50} width={80} />
                  <Skeleton height={50} width={80} />
                </SkeletonTheme>                                &nbsp;&nbsp;&nbsp;

              </div>
            </div>
          </div>

          {/* market cap etc */}
          <div className='flex justify-between flex-col sm:flex-row p-4 mt-[4rem] border-b border-t border-gray-800 '>
            <div className='flex'>
              <div className='pr-2 ml-1 md:ml-10 pl-5 w-full'>
                <div>
                  <small className={styles.title}>Market Cap</small>
                </div>
                <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                  <Skeleton height={50} width={80} />
                </SkeletonTheme>
              </div>

              <div className='ml-1 md:ml-10 pl-5 w-full sm:border-l sm:border-gray-800'>
                <div>
                  <div>
                    <small className={styles.title}>Fully Diluted Market Cap</small>
                  </div>
                  <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                    <Skeleton height={50} width={80} />
                  </SkeletonTheme>

                </div>
                <br />
                <div>
                  <div>
                    <small className={styles.title}>Price change 24h</small>
                  </div>
                  <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                    <Skeleton height={50} width={80} />
                  </SkeletonTheme>
                </div>
              </div>
            </div>
            {/* --------- */}
            <div className='flex '>
              <div className='ml-1 md:ml-10 pl-5 w-full sm:border-l sm:border-gray-800'>
                <div className='border-t border-gray-800 sm:border-none'>
                  <div>
                    <small className={styles.title}>All time high</small>
                  </div>
                  <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                    <Skeleton height={50} width={80} />
                  </SkeletonTheme>
                </div>
                <br />
                <div>
                  <div>
                    <small className={styles.title}>Price change 1y</small>
                  </div>
                  <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                    <Skeleton height={50} width={80} />
                  </SkeletonTheme>
                </div>
              </div>

              <div className='ml-1 md:ml-10 pl-5 w-full sm:border-l sm:border-gray-800'>
                <div className='border-t border-gray-800 sm:border-none'>
                  <div>
                    <small className={styles.title}>Circulating Supply</small>
                  </div>
                  <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                    <Skeleton height={50} width={80} />
                  </SkeletonTheme>
                </div>
                <br />
                <div>
                  <div>
                    <div>
                      <small className={styles.title}>Volume</small>
                    </div>
                    <SkeletonTheme baseColor="#1F2937" highlightColor="#22344d">
                      <Skeleton height={50} width={80} />
                    </SkeletonTheme>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </main >
  </>
}
export default loading
