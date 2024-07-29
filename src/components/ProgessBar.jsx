/* eslint-disable react/prop-types */

function ProgressBar({ skillsData }) {
    return (
        <>
            {skillsData?.map((item, i) => {
                return (
                    <div className="mt-5 sm:mt-0" key={i}>
                        <div className="flex justify-between">
                            <p>{item.skill}</p>
                            <p>{item.score}%</p>
                        </div>
                        <div className="w-full h-2 bg-[#0D0D0D]">
                            <div
                            className="h-full bg-blue-500"
                            style={{ width: `${item.score}%` }}
                            ></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default ProgressBar;
