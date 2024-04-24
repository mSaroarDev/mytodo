import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const ProfilePage = () => {
  // states
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [nid, setNid] = useState("");

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      fathername: fathername,
      address: address,
      mobile: mobile,
      nid: nid,
    });
  };

  return (
    <>
      <DashboardLayout>
        <div className="__page-header">
          <h2 className="text-[22px] font-bold">Profile</h2>

          <div className="mt-7">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-[750px] bg-white p-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Father Name</label>
                    <input
                      type="text"
                      onChange={(e) => setFatherName(e.target.value)}
                      value={fathername}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name">Address</label>
                    <input
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </div>
                  <div className="flex items-center gap-3 w-full">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="name">Mobile Number</label>
                      <input
                        type="text"
                        onChange={(e) => setMobile(e.target.value)}
                        value={mobile}
                      />
                    </div>
                    <div className="flex flex-col gap-1  w-full">
                      <label htmlFor="name">NID Number</label>
                      <input
                        type="text"
                        onChange={(e) => setNid(e.target.value)}
                        value={nid}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="submit" className="button-main mt-5">
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ProfilePage;
