import { Fragment } from 'react';

export default function Drawer({ open, onClose, title, children }: any) {
  return (
    <Fragment>
      <main
        className={
          ' fixed overflow-hidden z-[52] mjb-12 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
          (open
            ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
            : ' transition-all delay-500 opacity-0 translate-x-full  ')
        }
      >
        <section
          className={
            ' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
            (open ? ' translate-x-0 ' : ' translate-x-full ')
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6  h-full">
            <div className="flex justify-between items-center border-b-2">
              <header className="p-4 font-bold text-2xl">{title}</header>
              <section
                className="text-primary-600 cursor-pointer mr-5 text-4xl w-screen flex flex-row justify-end"
                onClick={() => {
                  onClose(false);
                }}
              >
                X
              </section>
            </div>
            {children}
          </article>
        </section>
      </main>
    </Fragment>
  );
}
