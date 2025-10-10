import { toast, ToastContainer } from "react-toastify";
import downloadSymb from "../../../assets/icon-downloads.png";
import ratingsymb from "../../../assets/icon-ratings.png";
// import { toast, ToastContainer } from "react-toastify";
const INstalldPage = ({ apps, setAppinstall }) => {
  // console.log(apps);

  const { id, title, image, ratingAvg, downloads, size } = apps;

  const hanleUninstall = (id) => {

    alert(`${title} Uninstall Successfully`);
    // toast(`${title} Uninstall Successfully`); // toast not warking
    const existingIds = JSON.parse(localStorage.getItem("Applist"));

    let updateList = existingIds.filter((p) => p !== id);
    setAppinstall((prev) => prev.filter((p) => p.id !== id));
    localStorage.setItem("Applist", JSON.stringify(updateList));
    return;
  };

  // const [allApps, setAllApps] = useState([]);

  // useEffect(() => {
  //   const installedIds = getStoredApp();

  //   const initialInstalledList = allApps.filter((app) =>
  //     installedIds.includes(app.id)
  //   );

  //   setAllApps(initialInstalledList);
  // }, [allApps]);

  return (
    <div>
      <div className="flex justify-between rounded-2xl shadow bg-white px-3 mt-4 mb-3 items-center py-2">
        <div className="prt flex gap-4 items-center">
          <div className="bg-[#D9D9D9] p-2 rounded">
            <img className="w-[25px] md:w-[40px]" src={image} alt="" />
          </div>
          <div>
            <h1 className="text-[18px] md:text-2xl font-semibold text-[#001931]">
              {title}
            </h1>
            <div className="flex gap-3 md:gap-4 mt-2">
              <span className="flex md:gap-1">
                <img
                  className="w-[15px] object-contain"
                  src={downloadSymb}
                  alt=""
                />
                <p className="font-bold text-[#00D390]">{downloads}M</p>
              </span>
              <span className="flex md:gap-1">
                <img
                  className="w-[15px] object-contain"
                  src={ratingsymb}
                  alt=""
                />
                <p className="font-bold text-[#FF8811]">{ratingAvg}</p>
              </span>
              <span>
                <p className="font-semibold text-[#627382]">{size} MB</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => hanleUninstall(id)}
            className="btn w-[70px] md:w-full font-semibold bg-[#00D390] text-white"
          >
            Uninstall
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default INstalldPage;
