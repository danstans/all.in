import React, { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren<{}>) => {
  return (
    <>
      <nav
        className="fixed flex h-14 w-full items-center justify-center bg-white"
        style={{
          boxShadow: "rgb(0 0 0 / 7%) 0px -1px inset",
        }}
      >
        <span>search bar</span>
      </nav>
      <div className="container relative top-14 mx-auto flex h-screen gap-8 pt-8">
        <header role="banner" className="flex-column w-72">
          left side content
        </header>
        <main role="main" className="flex flex-grow gap-8">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
