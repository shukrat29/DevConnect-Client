function App() {
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">DevConnect</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQE1YYdfaHUlVA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679720062445?e=1735171200&v=beta&t=OciOPEEKkykzMHI6OSsQwDK8wucD34Xxe25NY3uC830"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
