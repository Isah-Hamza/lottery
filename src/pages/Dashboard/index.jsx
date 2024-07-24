import React, { useState } from "react";
import property from "../../assets/images/property.png";
import resident from "../../assets/images/residents.png";
import staff from "../../assets/images/staff.png";
import asset from "../../assets/images/asset.png";
import send from "../../assets/images/send.svg";
import colony from "../../assets/images/friends_colony.png";
import transfer from "../../assets/images/transfer.png";
import approve from "../../assets/images/approve.png";
import fire from "../../assets/images/fire.png";
import jide from "../../assets/images/jide.png";
import CustomLineChart from "../../components/Chart/LineChart";

import { RxCaretDown } from "react-icons/rx";

const Dashboard = () => {
  const [communities, setCommunities] = useState([]);

  const AttendedTo = () => (
    <div className="bg-primary-green/10  text-primary-green text-xs p-1 rounded-xl">
      Attended To
    </div>
  );
  const Pendidng = () => (
    <div className="bg-primary-yellow/30  text-primary-yellow text-xs p-1 rounded-xl">
      Pending
    </div>
  );
  const statuses = {
    1: <Pendidng />,
    2: <AttendedTo />,
  };
  const emergencies = [
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 1,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: 2,
      cateogry: "Fire",
    },
  ];
  const services = [
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 1,
      time: "09:20am",
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
    {
      name: "Plumbing Service",
      address: "Flat 2B Anjorine",
      status: 2,
      resident: "Jamiu Jimoh",
    },
  ];
  const checkin = [
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Resident",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
    {
      name: "Jide Niniola",
      address: "10A Adeshowo",
      status: "Visitor",
      time: "09:20am",
      img: jide,
    },
  ];

  return (
    <div>
      <div className="grid gap-5 md:grid-cols-[2.6fr,1.4fr] min-h-20">
        <div className="bg-white rounded-xl p-4 sm:p-7">
          <div className="flex items-center gap-10 justify-between mb-12">
            <p className="text-lg font-medium text-faint-black">
              Friends Colony Finance
            </p>
            <div className="relative">
              <select className="min-w-20 bg-gray-300 rounded-3xl p-2 px-3 pr-4 appearance-none text-sm">
                <option value="">year</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
              </select>
              <span className="absolute top-1/2 -translate-y-1/2 right-2">
                <RxCaretDown />
              </span>
            </div>
          </div>
          <div className="chart-parent my-5 h-52 grid place-content-center -ml-7 mb-12">
            <CustomLineChart />
          </div>
          <div className="grid grid-cols-2 sm:flex text-sm gap-y-10 sm:gap-y-0">
            <div className="col-span-2">
              <p className="font-medium">₦587,346</p>
              <p>From the start of this month</p>
            </div>
            <div className="ml-auto items-start flex px-5 border-x mx-5">
              <div className="mt-1.5 mr-2 bg-primary-green w-2 h-2 rounded-full"></div>
              <div className="">
                <p>Inflow</p>
                <p className="font-medium">₦407,980</p>
              </div>
            </div>
            <div className="flex items-start pr-5 mr-5 border-r">
              <div className="mt-1.5 mr-2 bg-primary-yellow w-2 h-2 rounded-full"></div>
              <div className="">
                <p>Outflow</p>
                <p className="font-medium">₦125,700</p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="">
                <p>Finance position</p>
                <p className="flex items-center gap-1">
                  <span className="text-primary-green font-medium">23%</span>
                  gain{" "}
                  <span>
                    {" "}
                    <img src={send} alt="send" />{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl h-full w-full">
          <div className="bg-primary-green h-52 text-white rounded-xl grid place-content-center text-center">
            <p className="text-xl font-bold">₦587,346</p>
            <p className="text-sm mt-3 text-white/85">Wallet balance</p>
            <p className="mt-5  text-white/85">
              Pending balance:{" "}
              <span className="text-white font-medium">₦45,000</span>{" "}
            </p>
          </div>
          <div className="px-5">
            <div className="text-xs mt-7 grid grid-cols-2 gap-3">
              <div className="p-2 rounded-xl border h-28 grid place-content-center text-center">
                <img src={transfer} className="mb-2 m-auto" alt="transfer" />
                <p>Transfer Money</p>
              </div>
              <div className="p-2 rounded-xl border h-28 grid place-content-center text-center">
                <img src={approve} className="mb-2 m-auto" alt="approve" />
                <p>Approve Payment</p>
              </div>
            </div>
            <div className="my-5">
              <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
                Go to payments
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-sm mt-5">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p>Properties</p>
              <p className="mt-2 text-xl font-semibold text-faint-black">44</p>
            </div>
            <img src={property} alt="property" />
          </div>
          <div className="flex mt-8">
            <p>
              {" "}
              <span className="font-medium">35</span> occupied |{" "}
              <span className="font-medium">9</span> vacant
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p>Residents</p>
              <p className="mt-2 text-xl font-semibold text-faint-black">82</p>
            </div>
            <img src={resident} alt="resident" />
          </div>
          <div className="flex mt-8">
            <p>
              {" "}
              <span className="font-medium">14</span> residents with dependants
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p>Staff</p>
              <p className="mt-2 text-xl font-semibold text-faint-black">13</p>
            </div>
            <img src={staff} alt="staff" />
          </div>
          <div className="flex mt-8">
            <p>
              {" "}
              <span className="font-medium">18</span> checked in
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <p>Assets</p>
              <p className="mt-2 text-xl font-semibold text-faint-black">13</p>
            </div>
            <img src={asset} alt="assets" />
          </div>
          <div className="flex mt-8">
            <p>
              {" "}
              <span className="font-medium">32</span> attended to
            </p>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="p-5 bg-white rounded-xl text-sm">
          <div className="flex gap-5 justify-between items-start">
            <div className="">
              <p className="font-medium ">Recent Emergency</p>
              <p className="text-[#828282]">
                <span className="font-medium">4</span> occurences this month
              </p>
            </div>
            <button className="text-xs">see all</button>
          </div>
          {emergencies.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfdfd] mt-3 text-sm flex justify-between items-center p-3 rounded-lg border"
            >
              <div className="flex items-center gap-3">
                <img src={fire} alt="fire" />
                <div>
                  <p className="font-medium text-faint-black mb-1">
                    {item.name}
                  </p>
                  <p>{item.address}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="mb-1">{statuses[item.status]}</div>
                <p className="text-primary-yellow">{item.cateogry}</p>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
              Manage emergencies
            </button>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl text-sm">
          <div className="flex gap-5 justify-between items-start">
            <div className="">
              <p className="font-medium ">Todays Checkin History</p>
              <p className="text-[#828282]">
                <span className="font-medium">12</span> visitors checked in
                today
              </p>
            </div>
            <button className="text-xs">see all</button>
          </div>
          {checkin.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfdfd] mt-3 text-sm flex justify-between items-center p-3 rounded-lg border"
            >
              <div className="flex items-center gap-3">
                <img src={item.img} alt="fire" />
                <div>
                  <p className="font-medium text-faint-black mb-1">
                    {item.name}
                  </p>
                  <p>{item.address}</p>
                </div>
              </div>
              <div>
                <div className="mb-1 p-1 text-center rounded-xl text-primary-green bg-primary-green/10 text-xs">
                  {item.status}
                </div>
                <p className="text-right">{item.time}</p>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
              Manage checkins
            </button>
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl text-sm">
          <div className="flex gap-5 justify-between items-start">
            <div className="">
              <p className="font-medium ">Pending service requests</p>
              <p className="text-[#828282]">
                <span className="font-medium">21</span> requests this month
              </p>
            </div>
            <button className="text-xs">see all</button>
          </div>

          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fdfdfd] mt-3 text-sm flex justify-between items-center p-3 py-2 rounded-lg border"
            >
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-medium text-faint-black mb-1">
                    {item.name}
                  </p>
                  <p>{item.address}</p>
                </div>
              </div>
              <div>
                <div className="ml-auto mb-1 p-1 text-center w-fit">
                  {statuses[item.status]}
                </div>
                <p className="text-right">{item.resident}</p>
              </div>
            </div>
          ))}
          <div className="mt-5">
            <button className="text-sm bg-[#1639300A] text-[#163930] font-medium w-full p-2.5 rounded-2xl ">
              Manage services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
