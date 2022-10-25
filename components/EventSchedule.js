import React from 'react'

const EventSchedule = () => {
  return (
    <div className="mt-32 lg:mt-72 basicContainer mb-32 eventScheduleSection">
      <h2>Event Schedule</h2>
      <p className="eventScheduleDesc">
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
        fermentum.
      </p>
      <div className="scheduleTable mt-20">
        <div className="overflow-x-auto relative rounded-lg">
          <table className="w-full text-sm text-center border-2 ">
            <thead>
              <tr>
                <th scope="col" className="py-8 px-12 border-r-2"></th>
                <th scope="col" className="py-8 px-6 tableTitle">
                  Tue
                </th>
                <th scope="col" className="py-8 px-6 tableTitle">
                  Wed
                </th>
                <th scope="col" className="py-8 px-20 tableTitle">
                  Thu
                </th>
                <th scope="col" className="py-8 px-6 tableTitle">
                  Fri
                </th>
                <th scope="col" className="py-8 px-6 tableTitle">
                  Sat
                </th>
                <th scope="col" className="py-8 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {/* 1st row */}
              <tr className="bg-white border-2">
                <th
                  scope="row"
                  className="py-8 px-12 tableTitle whitespace-nowrap border-r-2"
                >
                  09:00
                </th>
                <td className="py-8 px-2 border-r-2">
                  <p className="smallDate">02 - 08- 2022</p>
                  <div className="mt-4 px-4 py-7 yellowBox border-2 rounded-md border-yellow-400 mx-auto text-left">
                    <h4 className="mb-2">Intro to the Conference</h4>
                    <h5>09:00-11:50</h5>
                  </div>
                </td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2">
                  
                </td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6">
                  <p className="smallDate">07 - 08- 2022</p>
                  <div className="mt-4 px-4 py-7 yellowBox border-2 rounded-md border-yellow-400 mx-auto text-left">
                    <h4 className="mb-2">VIP lunch break</h4>
                    <h5>09:00-10:00</h5>
                  </div>
                </td>
              </tr>
              {/* 2nd row */}
              <tr className="bg-white border">
                <th
                  scope="row"
                  className="py-8 px-12 tableTitle whitespace-nowrap border-r-2"
                >
                  10:00
                </th>
                <td className="py-8 px-2 border-r-2"></td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2">
                  <p className="smallDate">12 - 08- 2022</p>
                  <div className="mt-4 px-4 py-7 yellowBox border-2 rounded-md border-yellow-400 mx-auto text-left">
                    <h4 className="mb-2">React Press Conference</h4>
                    <h5>10:00-11:00</h5>
                  </div>
                </td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6"></td>
              </tr>
              <tr className="bg-white border">
                <th
                  scope="row"
                  className="py-8 px-12 tableTitle whitespace-nowrap border-r"
                >
                  17:00
                </th>
                <td className="py-8 px-2 border-r-2"></td>
                <td className="py-8 px-6 border-r-2">
                  <p className="smallDate">17 - 08- 2022</p>
                  <div className="mt-4 px-4 py-7 blueBox border-2 rounded-md border-blue-400 mx-auto text-left">
                    <h4 className="mb-2">Guest Dinner break</h4>
                    <h5>17:00-18:00</h5>
                  </div>
                </td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2"></td>
                <td className="py-8 px-6 border-r-2">
                  <p className="smallDate">20 - 08- 2022</p>
                  <div className="mt-4 px-4 py-7 blueBox border-2 rounded-md border-blue-400 mx-auto text-left">
                    <h4 className="mb-2">After work party</h4>
                    <h5>17:00-18:30</h5>
                  </div>
                </td>
                <td className="py-8 px-6"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EventSchedule