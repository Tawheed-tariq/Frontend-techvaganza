import '../App.css'
import Header from './Header'
export default function PageLayout({ title, imgUrl, children }) {
  return (
    <>
      <div className="background-image bg-1"></div>
      <div className="background-image bg-2"></div>
      <div className="background-image bg-3"></div>
      <div className="background-image bg-4"></div>

      <div className="glass-layer"></div>

      <div className="content">
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={`bg-cover bg-no-repeat h-[480px]`}
        >
          <div className="w-full h-full flex flex-col">
            <Header/>
            <div className="px-[380px] flex items-center font-playfair flex-grow">
              <p className="text-secondary font-extrabold text-5xl leading-normal">
                {title}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:px-[380px] md:px-[150px] py-32">{children}</div>
      </div>
    </>
  );
}
